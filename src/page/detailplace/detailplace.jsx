import React from 'react';
import {withRouter} from "react-router-dom";
import {placeService,bookingService} from '../../services';
import image from '../../assets/images/img_maison.jpeg';
import Button from '../../components/button';


class PlaceDetail extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            place:null,
            error: null,
            check_in:null,
            check_out:null,
            bookingId:null
        };
    }

    async componentDidMount() {
        console.log(this.props.match);
        const placeId = this.props.match.params.placeId;
       

        try {
            const response = await placeService.getPlace(placeId);
           
           
            this.setState({place:response.data});
        } catch (e) {
            this.setState({error: e.response.data.message });
        }
    }

    handleBookingClick = async (e) => {
        const {check_in,check_out,place} = this.state;
        
        try {
            console.log(this.state);
            const response = await bookingService.addBooking(check_in,check_out,place[0].id_place,place[0].user_id);
            //localStorage.setItem('token', response.data.token);
            console.log(response);
            this.props.history.push('/');
        } catch(e) {
            console.log(e);
            this.setState({error: e.response.data.message });
        }
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        const list = this.state.place;
        console.log(list);
        return (
            <>
             
              
                {this.state.error && <p>{this.state.error}</p>}
                {//si list pas egal null
                }
                {list && list.map(key=>
                    <article >
                        <Button size="small" handleClick={(e) => this.props.history.push('/updatePlace/'+key.id_place)} value="update place" ></Button>
                       <h3>{key.name}</h3>
                        <img src={image} alt=''/>
                        <p>{key.city_name}</p>
                        <p>{key.price_by_night}</p>
                        <p>{key.rooms}</p>
                        <p>{key.bathrooms}</p>
                        <p>{key.max_guests}</p>

                        <p>{key.description}</p>
                        <label for="check-in">Check-In</label>
                        <input type="date" name="check_in" value={this.state.check_in} onChange={this.handleChange} />
                        <label for="check-in">Check-Out</label>
                        <input type="date" name="check_out" value={this.state.check_out} onChange={this.handleChange} /> 
                        <Button size="small"  handleClick={this.handleBookingClick} 
                        value="Reservation"></Button>

                       
                    </article>
               ) }
            </>
        )
    }
}

export default withRouter(PlaceDetail);