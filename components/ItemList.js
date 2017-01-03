var React = require('react');
var Item = require('./Item.js');
var NewItemControls = require('./сomponentsСontrols/newItemControls.js')

class ItemList extends React.Component {
    constructor(props) {
        super(props);

         this.onDelete = this.onDelete.bind(this);
         this.onAdd = this.onAdd.bind(this);
         this.changeCheckState = this.changeCheckState.bind(this);
    }

    onDelete(item) {
        this.props.onDelete(item);
    }

    onAdd(item) {
        this.props.onAdd(item);
    }

    changeCheckState(item) {
        this.props.changeCheckState(item);
    }

    render(){
        return (
            <div className="listContainer">
                <NewItemControls onAdd={this.onAdd.bind(this)} />
                <ul className="itemList">
                    {this.props.items.map((item) => <Item changeCheckState={this.changeCheckState} item={item} onDelete={this.onDelete.bind(this)} />)}
                </ul>

            </div>
            );
    }
}
module.exports = ItemList;