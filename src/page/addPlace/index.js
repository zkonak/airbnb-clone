import React from 'react';

import AddPlaceForm from './addPlace'


class AddPlace extends React.Component {

    render() {
        return (
            <>

            
             <AddPlaceForm history={this.props.history} />
               
                
            </>
        )
    }
}

export default AddPlace;