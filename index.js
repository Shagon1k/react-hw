var React = require('react');
var ReactDOM = require('react-dom');
var ItemList = require('./components/ItemList.jsx');
var CategoryList = require('./components/CategoryList.jsx');
var Progressbar = require('./components/Progressbar.jsx');
var Searchitem = require('./components/Searchitem.jsx');

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
        this.changeSearchValue = this.changeSearchValue.bind(this);

        this.state = {
            categories:[
                {catName: "Category 1", catNumber: 0, items: [{header : "1-To-Do Item #1", isDone: false}]},
                {catName: "Category 2", catNumber: 1, items: [{header : "2-To-Do Item #1", isDone: true}, {header : "2-To-Do Item #2", isDone: false}]},
                {catName: "Category 3", catNumber: 2, items: [{header : "3-To-Do Item #1", isDone: false}, {header : "3-To-Do Item #2", isDone: false}, {header : "3-To-Do Item #3", isDone: true}]}
            ],
            activeCategory: -1,
            searchValue: ''
        }

    }

    componentDidMount() {
        this.calculateDoneTasks();
        this.changeActiveCategory(-1);
    }

    changeSearchValue(value) {
        this.setState({searchValue: value})
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
        if (this.state.categories.indexOf(category) < this.state.activeCategory) {
                this.changeActiveCategory(this.state.activeCategory-1);
            }
            else if (this.state.categories.indexOf(category) === this.state.activeCategory) {
                this.changeActiveCategory(-1);
            }
        this.setState((prevState)=>{
            return {categories: prevState.categories.filter((i)=> i !== category)}
        }, function() {
            this.calculateDoneTasks();

        });
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
            selectedCategory = $(categories[catNumb]),
            previousCategory = $(categories[this.state.activeCategory]);

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
                <Searchitem changeSearchValue={this.changeSearchValue}></Searchitem>
                <Progressbar doneCount={this.state.doneCount} tasksCount={this.state.tasksCount}></Progressbar>
                <div className="mainContainer">
                    <CategoryList onAdd={this.onAddCategory} onDelete={this.onDeleteCategory} changeActiveCategory={this.changeActiveCategory}  categories={this.state.categories}></CategoryList>
                    {(this.state.activeCategory >= 0)?<ItemList onAdd={this.onAddItem} onDelete={this.onDeleteItem} changeCheckState={this.changeCheckState} items={this.state.categories[this.state.activeCategory].items.filter((i)=> i.header.includes(this.state.searchValue))}></ItemList>:null}
                </div>
            </div>
            );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));