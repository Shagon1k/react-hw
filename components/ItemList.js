var React = require('react');
var Item = require('./Item.js');
var NewItemControls = require('./сomponentsСontrols/newItemControls.js')

class ItemList extends React.Component {
    constructor(props) {
        super(props);

         this.onDelete = this.onDelete.bind(this);
         this.onAdd = this.onAdd.bind(this);
    }

    onDelete(item) {
        this.props.onDelete(item);
    }

    onAdd(item) {
        this.props.onAdd(item);
    }

    render(){
        return (
            <div>
                <NewItemControls onAdd={this.onAdd.bind(this)} />
                <ul>
                    {this.props.items.map((item) => <Item item={item} onDelete={this.onDelete.bind(this)} />)}
                </ul>

            </div>
            );
    }
}
module.exports = ItemList;