import React from 'react';

import BookingList from './booking'


class Booking extends React.Component {

    render() {
        return (
            <>

           
             <BookingList history={this.props.history} />
               
                
            </>
        )
    }
}

export default Booking;