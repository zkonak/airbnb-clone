import React from 'react';
import {homeService} from '../../services';
import image from '../../assets/images/img_maison.jpeg';
import {withRouter} from "react-router-dom";
import Button from '../../components/button';


class PlaceList extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            placeList: null,
            error: null
        };
    }

    async componentDidMount() {
        const queryString = require('query-string');
        const parsed = queryString.parse(this.props.location.search);
     
        try {
            const response = await homeService.getPlaces(parsed.city);
            this.setState({placeList: response.data});
            
        } catch (e) {
            this.setState({error: e.response.data.message });
        }
    }

    handleButtonClick=(e)=>{
 
      
        this.props.history.push('/addplace');
        this.props.history.go();
       }

    render() {
        const list = this.state.placeList;
        return (
            <>
           <Button size="small" handleClick={(e) => this.props.history.push('/signup')} value="Devenez Hote" ></Button>
           <Button size="small" handleClick={(e) => this.props.history.push('/signup')} value="Inscription"></Button>
           <Button size="small" handleClick={this.handleButtonClick.bind(this)} value="Ajoutez Une Maison"></Button>
           <Button size="small" handleClick={(e) => this.props.history.push('/bookings')} value="Mes Reservations"></Button> 
            <h1>Les meilleurs logements</h1>

                {this.state.error && <p>{this.state.error}</p>}
                {//si list pas egal null
                }
                {list && list.map(key=>
                    <article onClick={(e) => this.props.history.push('/places/' + key.id_place)}>
                       <h3>{key.place_name}</h3>
                        <img src={image} alt=''/>
                        <p>{key.description}</p>
                        <p>{key.city_name}</p>
                        <p>{key.price_by_night}</p>
                    </article>
               ) }
            </>
        )
    }
}

export default withRouter(PlaceList);
