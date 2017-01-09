var React = require('react');
var ReactDOM = require('react-dom');
//var List = require('./components/List.js');
//var Controls = require('./components/Controls.js');

class App extends React.Component {
    constructor(props) {
        super(props);
    };
    render(){
        return (
            <div> Oh!
                Yeah!
            </div>
            );
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));