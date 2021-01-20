import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onFormSubmit(this.state.term)
    };

    handleInputChange = evt => {
        this.setState({term: evt.target.value})
    };
 
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.handleInputChange} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;