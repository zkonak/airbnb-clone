import React from 'react';
import {bookingService} from '../../services';
import image from '../../assets/images/img_maison.jpeg';
import {booking} from '../booking'


class DeleteBookings extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
           
            bookingId:null,
            // error: null
            // city_id:null,
            // name: null,
            // description: null,
            // rooms: null,
            // bathrooms: null,
            // max_guests: null,
            // price_by_night: null,
            // available:null,
            check_in:null,
            check_out:null
            //placeId:null,//
            //cityList:[]//
        };
    }

    async componentDidMount() {
       
     
        try {
            const response = await bookingService.getBookings();
            this.setState({bookingList: response.data});
            
        } catch (e) {
            this.setState({error: e.response.data.message });
        }
        console.log(this.props.match);
        const bookingId = this.props.match.params.bookingId;
        this.setState({bookingId: bookingId});
        try {
            console.log(this.state);
            const response = await bookingService.deleteBooking(bookingId);
            console.log(response)

            this.setState({check_in:response.data.check_in,check_out:response.data.check_out , bookingId:response.data.bookingId});
            //localStorage.setItem('token', response.data.token);
            
            
        } catch(e) {
            console.log(e);
            this.setState({error: e.response.data.message });
        }
    }


    handleClick = async (e) => {
        const {check_in,check_out, bookingId} = this.state;

        try {
            console.log(this.state);
            const user_id=localStorage.getItem("user_id")
            const response = await bookingService.deleteBooking(user_id,check_in,check_out, bookingId);
            //localStorage.setItem('token', response.data.token);
            this.props.history.push('/bookings');
        } catch(e) {
            console.log(e);
            this.setState({error: e.response.data.message });
        }
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

                        

                    </article>
               ) }
            </>
        )
    }
}

export default DeleteBookings;