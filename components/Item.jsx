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

    onDelete(e) {
        e.stopPropagation();
        this.props.onDelete(this.props.item);
    }

    render(){
        return (
            <li onClick={this.changeCheckState} className="clearfix">
                <input type="checkbox" checked={this.props.item.isDone}/>
                {this.props.item.header}
                <button className="deleteButton" onClick={this.onDelete} >
                    <span className="deleteIcon" data-icon="&#xe80f;"></span>
                </button>
            </li>
            );
    }
}
module.exports = Item;