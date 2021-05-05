import React from 'react';
import PlaceDetail from './detailplace'


class Place extends React.Component {

    render() {
        return (
            <>
                <PlaceDetail history={this.props.history} />
               
                
            </>
        )
    }
}

export default Place;