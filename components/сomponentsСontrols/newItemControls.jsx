var React = require('react');

class newItemControls extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: {header : "", isDone: false}
        }

        this.onAdd = this.onAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({item: {header: event.target.value, isDone: false} })
    }

    onAdd() {
        this.props.onAdd(this.state.item);
        this.setState({item: {header: "", isDone: false} })
    }

    render(){
        return (
            <div>
                <input className="newItemInput" id="newItem" type="text" value={this.state.item.header} onChange={this.handleChange} />
                <button className="newItemButton" onClick={this.onAdd}>
                    Add New Note
                </button>
            </div>
            );
    }
}
module.exports = newItemControls;