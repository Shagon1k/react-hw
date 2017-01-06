var React = require('react');

class Category extends React.Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
        this.changeActiveCategory = this.changeActiveCategory.bind(this);

        this.state={};
    }

    onDelete(e) {
        e.stopPropagation();
        this.props.onDelete(this.props.category);
    }

    changeActiveCategory(e) {
        var li = $(e.target).closest('li');
        this.props.changeActiveCategory(li.index());
    }

    render(){
        return (
            <li onClick={this.changeActiveCategory} className="clearfix">
                {this.props.category.catName}
                <button className="deleteButton" onClick={this.onDelete}>
                    <span className="deleteIcon" data-icon="&#xe80f;"></span>
                </button>
            </li>
            );
    }
}
module.exports = Category;