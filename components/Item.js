var React = require('react');

class Item extends React.Component {
    constructor(props) {
        super(props);
         this.onDelete = this.onDelete.bind(this);
         this.changeCheckState = this.changeCheckState.bind(this);

         this.state={isDone: false};
    }

    changeCheckState() {
        this.setState(prevState => ({
      isDone: !prevState.isDone
    }))
    }

    onDelete() {
        this.props.onDelete(this.props.item);
    }

    render(){
        return (
            <li>
                <label>
                    <input onClick={this.changeCheckState} type="checkbox" checked={this.state.isDone}/>
                    {this.props.item.header}
                </label>
                <button onClick={this.onDelete} >
                    Delete Item
                </button>
            </li>
            );
    }
}
module.exports = Item;