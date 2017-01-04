var React = require('react');

class Category extends React.Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
        this.changeActiveCategory = this.changeActiveCategory.bind(this);

        this.state={};
    }

    onDelete() {
        this.props.onDelete(this.props.category);
    }

    changeActiveCategory(e) {
        var li = $(e.target).closest('li');
        this.props.changeActiveCategory(li.index());
    }

    render(){
        return (
            <li className="clearfix">
                <label onClick={this.changeActiveCategory}>
                    {this.props.category.catName}
                </label>
                <button className="deleteButton" onClick={this.onDelete}>
                    Delete Category
                </button>
            </li>
            );
    }
}
module.exports = Category;