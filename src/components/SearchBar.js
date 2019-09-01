import React from 'react';

class SearchBar extends React.Component{
    //Initializing search term state as empty string
    state={term: ''}
    
    //updates search bar as user types
    onInputChange = (event) =>{
        this.setState({term: event.target.value});
    };

    //once user searches, prevent the page from refreshing then pass search term to parent component
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        type="text" 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />
                        <button className="ui button primary">Search</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;