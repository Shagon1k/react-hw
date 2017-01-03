var React = require('react');
var ReactDOM = require('react-dom');
var ItemList = require('./components/ItemList.js');
var CategoryList = require('./components/CategoryList.js')
var Progressbar = require('./components/Progressbar.js')

class App extends React.Component {
    constructor(props) {
        super(props);

        this.onAddItem = this.onAddItem.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.onAddCategory = this.onAddCategory.bind(this);
        this.onDeleteCategory = this.onDeleteCategory.bind(this);
        this.changeActiveCategory = this.changeActiveCategory.bind(this);
        this.calculateDoneTasks = this.calculateDoneTasks.bind(this);
        this.changeCheckState = this.changeCheckState.bind(this);

        this.state = {
            categories:[
                {catName: "Category 1", catNumber: 0, items: [{header : "1-To-Do Item #1", isDone: false}]},
                {catName: "Category 2", catNumber: 1, items: [{header : "2-To-Do Item #1", isDone: true}, {header : "2-To-Do Item #2", isDone: false}]},
                {catName: "Category 3", catNumber: 2, items: [{header : "3-To-Do Item #1", isDone: false}, {header : "3-To-Do Item #2", isDone: false}, {header : "3-To-Do Item #3", isDone: false}]}
            ],
            activeCategory: 0
        }

    }

    componentDidMount() {
        this.calculateDoneTasks();
        this.changeActiveCategory(0);
    }

    calculateDoneTasks() {
        var doneCount = 0;
        var tasksCount = 0;
        for (var i = 0; i < this.state.categories.length; i++) {
            for(var j = 0; j < this.state.categories[i].items.length; j++) {
                if (this.state.categories[i].items[j].isDone) {
                    doneCount++;
                }
                tasksCount++;
            }
        }
        this.setState({doneCount: doneCount});
        this.setState({tasksCount: tasksCount});
    }

    changeCheckState(item) {
        this.setState((prevState) => {
            var newCategories = prevState.categories;
            newCategories[this.state.activeCategory].items.filter((i)=> {
                if (i === item) {
                    i.isDone = !i.isDone;
                }
            });
            return {categories: newCategories};
        }, function() {
            this.calculateDoneTasks();
        });
    }

    onDeleteCategory(category) {
        this.setState((prevState)=>{
            return {categories: prevState.categories.filter((i)=> i !== category)}
        }, function() {
            this.calculateDoneTasks();
        });
        this.changeActiveCategory(0);
    }

    onAddCategory(category) {
        this.setState((prevState)=>{
            var newCategories = prevState.categories;
            newCategories.push(category);
            return {categories: newCategories};
        });
    }

    changeActiveCategory(catNumb) {
        var categories = $('#categoryList li'),
            selectedCategory = $(categories[catNumb]).find('label'),
            previousCategory = $(categories[this.state.activeCategory]).find('label');

        previousCategory.removeClass('selectedCategory');
        selectedCategory.addClass('selectedCategory');

        this.setState({activeCategory: catNumb})
    }

    onDeleteItem(item) {
        this.setState((prevState)=>{
            var newCategories = prevState.categories;
            newCategories[prevState.activeCategory].items = newCategories[prevState.activeCategory].items.filter((i)=> i !== item);
            return {categories: newCategories};
        }, function() {
            this.calculateDoneTasks();
        });
    }

    onAddItem(item) {
        this.setState((prevState)=>{
            var newCategories = prevState.categories;
            newCategories[prevState.activeCategory].items.push(item);
            return {categories: newCategories};
        }, function() {
            this.calculateDoneTasks();
        });
    }

    render(){
        return (
            <div className="container">
                <Progressbar doneCount={this.state.doneCount} tasksCount={this.state.tasksCount}></Progressbar>
                <div className="mainContainer">
                    <CategoryList onAdd={this.onAddCategory} onDelete={this.onDeleteCategory} changeActiveCategory={this.changeActiveCategory}  categories={this.state.categories}></CategoryList>
                    <ItemList onAdd={this.onAddItem} onDelete={this.onDeleteItem} changeCheckState={this.changeCheckState} items={this.state.   categories[this.state.activeCategory].items}></ItemList>
                </div>
            </div>
            );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));