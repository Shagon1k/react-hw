var React = require('react');

class Category extends React.Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);

        this.state={};
    }

    onDelete() {
        this.props.onDelete(this.props.category);
    }

    render(){
        return (
            <li>
                <label>
                    <input type="checkbox" />
                </label>
                {this.props.category.catName}
                <button onClick={this.onDelete}>
                    Delete Category
                </button>
            </li>
            );
    }
}
module.exports = Category;