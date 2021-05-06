import React from 'react';
import SearchBar from './search'


class Search extends React.Component {

    render() {
        return (
            <>
                <SearchBar history={this.props.history} />
               
                
            </>
        )
    }
}

export default Search;