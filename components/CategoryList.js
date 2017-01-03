var React = require('react');
var Category = require('./Category.js');
var NewCategoryControls = require('./сomponentsСontrols/newCategoryControls.js')

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
                    {this.props.categories.map((category)=> <Category changeActiveCategory={this.changeActiveCategory} category={category} onDelete={this.onDelete} />)}
                </ul>

            </div>
            );
    }
}
module.exports = CategoryList;