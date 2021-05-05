import React from 'react';
import {homeService} from '../../services';
import image from '../../assets/images/img_maison.jpeg';


class PlaceList extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            placeList: null,
            error: null
        };
    }

    async componentDidMount() {
       

        try {
            const response = await homeService.getPlaces();
            this.setState({placeList: response.data});
        } catch (e) {
            this.setState({error: e.message});
        }
    }

    render() {
        const list = this.state.placeList;
        return (
            <>
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

export default PlaceList;