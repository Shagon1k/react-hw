var React = require('react');

class Progressbar extends React.Component {
    constructor(props) {
        super(props);
    }


    render(){
        const progressStyle = {
            backgroundColor: '#0099ff',
            width: this.props.doneCount/this.props.tasksCount*100+'%'
        }
        return (
            <div className="progressBar">
                <span className="progressNumber">{this.props.doneCount+'/'+this.props.tasksCount}</span>
                <div className="currentProgress" style={progressStyle}></div>
            </div>

            );
    }
}

module.exports = Progressbar;