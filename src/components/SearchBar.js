import React from 'react';

class SearchBar extends React.Component {
    state = { term: 'hi THERE'};
    onFormSubmit: function(event) {
        event.preventDefault();
        console.log(this.state.term);
    }
    render() {
        return (
            <div className="ui segment">
             <form onSubmit= {this.onFormSubmit(this.state.term)}className="ui form">
                 <div className="field">
                     <label>Image Search</label>
                    <input type="text" 
                    value={this.state.term}
                    onChange={(e) => {this.setState({ term: e.target.value.toUpperCase()})}}/>
                 </div>
             </form>
            </div>
        )
    }
}

export default SearchBar;