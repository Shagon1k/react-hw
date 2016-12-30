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

    changeActiveCategory(e) {
        var li = $(e.target);
        this.props.changeActiveCategory(li.index());
    }

    render(){
        return (
            <div>
                <NewCategoryControls categoriesCount={this.props.categories.length} onAdd={this.onAdd} />
                <ul onClick={this.changeActiveCategory}>
                    {this.props.categories.map((category)=> <Category category={category} onDelete={this.onDelete} />)}
                </ul>

            </div>
            );
    }
}
module.exports = CategoryList;