var React = require('react');

class Item extends React.Component {
    constructor(props) {
        super(props);
         this.onDelete = this.onDelete.bind(this);
         this.changeCheckState = this.changeCheckState.bind(this);
    }

    changeCheckState() {
        this.props.changeCheckState(this.props.item);
    }

    onDelete() {
        this.props.onDelete(this.props.item);
    }

    render(){
        return (
            <li className="clearfix">
                <label>
                    <input onClick={this.changeCheckState} type="checkbox" checked={this.props.item.isDone}/>
                    {this.props.item.header}
                </label>
                <button className="deleteButton" onClick={this.onDelete} >
                    Delete Item
                </button>
            </li>
            );
    }
}
module.exports = Item;