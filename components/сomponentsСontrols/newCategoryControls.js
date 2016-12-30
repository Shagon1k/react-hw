var React = require('react');

class newCategoryControls extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: {catName: "", catNumber: -1, items: []}
        }

        this.onAdd = this.onAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({category: {catName: event.target.value, catNubmer: this.props.categoriesCount, items: []} })
    }

    onAdd() {
        this.props.onAdd(this.state.category);
        this.setState({category: {catName: "", catNumber: -1, items: []}});
    }

    render(){
        return (
            <div>
                <input id="newItem" type="text" value={this.state.category.catName} onChange={this.handleChange} />
                <button onClick={this.onAdd}>
                    Add New Category
                </button>
            </div>
            );
    }
}
module.exports = newCategoryControls;