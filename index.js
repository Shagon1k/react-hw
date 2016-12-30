var React = require('react');
var ReactDOM = require('react-dom');
var ItemList = require('./components/ItemList.js');
var CategoryList = require('./components/CategoryList.js')

class App extends React.Component {
    constructor(props) {
        super(props);

        this.onAddItem = this.onAddItem.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.onAddCategory = this.onAddCategory.bind(this);
        this.onDeleteCategory = this.onDeleteCategory.bind(this);
        this.changeActiveCategory = this.changeActiveCategory.bind(this);


        this.state = {
            categories:[
                {catName: "Category 1", catNumber: 0, items: [{header : "1-To-Do Item #1"}]},
                {catName: "Category 2", catNumber: 1, items: [{header : "2-To-Do Item #1"}, {header : "2-To-Do Item #2"}]},
                {catName: "Category 3", catNumber: 2, items: [{header : "3-To-Do Item #1"}, {header : "3-To-Do Item #2"}, {header : "3-To-Do Item #3"}]}
            ],
            activeCategory: 0

        }
    }

    onDeleteCategory(category) {
        this.setState({categories: this.state.categories.filter((i)=> i !== category)});
    }

    onAddCategory(category) {
        this.setState((prevState)=>{
            var newCategories = prevState.categories;
            newCategories.push(category);
            return {categories: newCategories};
        });
    }

    changeActiveCategory(catNumb) {
        this.setState({activeCategory: catNumb})
    }

    onDeleteItem(item) {
        this.setState((prevState)=>{
            var newCategories = prevState.categories;
            newCategories[prevState.activeCategory].items = newCategories[prevState.activeCategory].items.filter((i)=> i !== item);
            return {categories: newCategories};
        });
    }

    onAddItem(item) {
        this.setState((prevState)=>{
            var newCategories = prevState.categories;
            newCategories[prevState.activeCategory].items.push(item);
            return {categories: newCategories};
        });
    }

    render(){
        return (
            <div>
                <CategoryList onAdd={this.onAddCategory} onDelete={this.onDeleteCategory} changeActiveCategory={this.changeActiveCategory} categories={this.state.categories}></CategoryList>
                <br/>
                <br/>
                <br/>
                <ItemList onAdd={this.onAddItem} onDelete={this.onDeleteItem} items={this.state.categories[this.state.activeCategory].items}></ItemList>
            </div>
            );
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));