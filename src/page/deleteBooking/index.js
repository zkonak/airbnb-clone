import React from 'react';
import DeleteBookings from './deleteBooking';
import UpdatePlace from './deletePlace';



class DeleteForm extends React.Component {

    render() {
        return (
            <>

            
             <DeleteBookings history={this.props.history} />
               
                
            </>
        )
    }
}

export default DeleteForm;