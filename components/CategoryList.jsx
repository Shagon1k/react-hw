var React = require('react');
var ReactRouter = require('react-router');
var Category = require('./Category.jsx');
var NewCategoryControls = require('./сomponentsСontrols/newCategoryControls.jsx')

class CategoryList extends React.Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.changeActiveCategory = this.changeActiveCategory.bind(this);
    }

    onDelete(category) {
        this.props.onDelete(category);
    }

    onAdd(category) {
        this.props.onAdd(category);
    }

    changeActiveCategory(numb) {
        this.props.changeActiveCategory(numb);
    }

    render(){
        return (
            <div className="categoriesContainer">
                <NewCategoryControls categoriesCount={this.props.categories.length} onAdd={this.onAdd} />
                <ul className="categoryList" id="categoryList">
                    {this.props.categories.map((category, index)=> <Category key={index} changeActiveCategory={this.changeActiveCategory} category={category} onDelete={this.onDelete} />)}
                </ul>

            </div>
            );
    }
}
module.exports = CategoryList;