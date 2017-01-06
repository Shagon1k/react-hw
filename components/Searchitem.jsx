var React = require('react');

class Searchitem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({searchValue: event.target.value}, function() {
            this.props.changeSearchValue(this.state.searchValue);
        });
    }

    render(){

        return (
            <div className="searchItem">
                <input className="searchItemInput" id="searchItemInput" type="text" value={this.state.searchValue} onChange={this.handleChange} />
            </div>
            );
    }
}

module.exports = Searchitem;