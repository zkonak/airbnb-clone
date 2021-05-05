import React from 'react';
import PlaceList from './home'


class Home extends React.Component {

    render() {
        return (
            <>
                <PlaceList history={this.props.history} />
               
                
            </>
        )
    }
}

export default Home;