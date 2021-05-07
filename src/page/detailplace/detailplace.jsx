import React from 'react';
import {withRouter} from "react-router-dom";
import {placeService} from '../../services';
import image from '../../assets/images/img_maison.jpeg';
import Button from '../../components/button';


class PlaceDetail extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            place:null,
            error: null
        };
    }

    async componentDidMount() {
        console.log(this.props.match);
        const placeId = this.props.match.params.placeId;

        try {
            const response = await placeService.getPlace(placeId);
           
            this.setState({place:response.data});
        } catch (e) {
            this.setState({error: e.message});
        }
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
                        
                       
                    </article>
               ) }
            </>
        )
    }
}

export default withRouter(PlaceDetail);