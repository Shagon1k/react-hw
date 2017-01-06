var React = require('react');

class Progressbar extends React.Component {
    constructor(props) {
        super(props);
        //this.smileMap = ["&#xe80d;", "&#xe802;", "&#xe800;", "&#xe80c;"]
    }
    render() {
        const progress = this.props.doneCount/this.props.tasksCount*100;
        const progressStyle = {
            width: progress+'%'
        }
        //let smile;
        //switch (true) {
        //    case (progress < 30):
        //        smile = this.smileMap[0];
        //        break;
        //    case (progress < 60):
        //        smile = this.smileMap[1];
        //        break;
        //    case (progress < 85):
        //        smile = this.smileMap[2];
        //        break;
        //    case (progress <= 100):
        //        smile = this.smileMap[3];
        //        break;
        //}

        return (
            <div className="progressPanel">
                <div className="progressBar">
                    <span className="progressNumber">{this.props.doneCount+'/'+this.props.tasksCount}</span>
                    <div className="currentProgress" style={progressStyle}></div>
                </div>
            </div>
            );
    }
}

module.exports = Progressbar;