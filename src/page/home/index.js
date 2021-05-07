import React from 'react';
import Search from '../search'
import PlaceList from './home'


class Home extends React.Component {

    render() {
        return (
            <>

             <Search history={this.props.history} />
            
             <PlaceList history={this.props.history} />
               
                
            </>
        )
    }
}

export default Home;