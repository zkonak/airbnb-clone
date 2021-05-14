import React from 'react';
import {bookingService} from '../../services';
import image from '../../assets/images/img_maison.jpeg';

import Button from '../../components/button';


class BookingList extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            bookingList: null,
            error: null

        };
    }

    async componentDidMount() {
        // const bookingId = this.props.match.params.bookingId;
     
        try {
            const response = await bookingService.getBookings();
            this.setState({bookingList: response.data});
            
        } catch (e) {
            this.setState({error: e.response.data.message });
        }
        // try {
        //     const response = await bookingService.getBookings(bookingId);
           
           
        //     this.setState({booking:response.data});
        // } catch (e) {
        //     this.setState({error: e.response.data.message });
        // }
    }

    // handleButtonClick=(e)=>{
 
      
    //     this.props.history.push('/addplace');
    //     this.props.history.go();
    //    }

    render() {
        const list = this.state.bookingList;
        console.log(list);
        return (
            <>
                <h1>Mes Reservations</h1>

                {this.state.error && <p>{this.state.error}</p>}
                {//si list pas egal null
                }
                {list && list.map(key=>
                    <article >
                       <h3>{key.place.place_name}</h3>
                        <img src={image} alt=''/>
                        <p>{key.place.description}</p>
                        <p>{key.place.city_name}</p>
                        <p>Prix:{key.place.price_by_night}</p>
                        <p>Check-In:{key.check_in}</p>
                        <p>Check-Out{key.check_out}</p>
                        <Button size="small" handleClick={(e) => this.props.history.push('/deleteBooking/'+ key.id_booking)} value="delete booking" ></Button>

                        

                    </article>
               ) }
            </>
        )
    }
}

export default BookingList;
