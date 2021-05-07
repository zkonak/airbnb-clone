import React from 'react';
import {placeService,searchService} from '../../services';
import Button from '../../components/button';

import Select from "react-dropdown-select";

import {withRouter} from "react-router-dom";

class UpdatePlace extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
           
            city_id:null,
            name: null,
            description: null,
            rooms: null,
            bathrooms: null,
            max_guests: null,
            price_by_night: null,
            available:1,
            placeId:null,
            cityList:[]
          
            }
    }

    async componentDidMount() {
       
        // const cityName=this.props.location.query.cityName;
          try {
              const response = await searchService.getCityList();
             
              this.setState({cityList: response.data});
            
             
          } catch (e) {
              this.setState({error:e.response.data.message });
          }
          console.log(this.props.match);
        const placeId = this.props.match.params.placeId;
        this.setState({placeId: placeId});
        try {
            const response = await placeService.getPlace(placeId);
           console.log(response)
            this.setState({city_id:response.data[0].city_id,name:response.data[0].name,description:response.data[0].description,rooms:response.data[0].rooms ,bathrooms:response.data[0].bathrooms,max_guests:response.data[0].max_guests,price_by_night:response.data[0].price_by_night,available:response.data[0].available});
        } catch (e) {
            this.setState({error: e.response.data.message });
        }
      }
      

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleCityChange = (e) => {
        
        this.setState({city_id: e[0].value});
    }

    handleClick = async (e) => {
        const {city_id,name,description,rooms ,bathrooms,max_guests,price_by_night,available,placeId} = this.state;

        try {
            console.log(this.state);
            const user_id=localStorage.getItem("user_id")
            const response = await placeService.updatePlace(user_id,city_id,name,description,rooms ,bathrooms,max_guests,price_by_night,available,placeId);
            //localStorage.setItem('token', response.data.token);
            this.props.history.push('/');
        } catch(e) {
            console.log(e);
            this.setState({error: e.response.data.message });
        }
    }


    
    render() {
        const  options = this.state.cityList.map(d => ({
            "value" : d.id,
            "label" : d.name
          }));
          console.log(this.state)
        return (
         <div className="signupForm">
          <h1>update place </h1>
            {this.state.error && <h6>{this.state.error}</h6>}
            
            <label for="name">Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            
            <label for="description">Description</label>
            <textarea type="description" name="description" value={this.state.description} onChange={this.handleChange} />
            <label for="city_id">Ville</label>
            <Select options={options}  name="city_id" value={this.state.city_id} placeholder="Choisir une Ville" onChange={this.handleCityChange}/>
                 
            <label for="rooms">Chambres</label>
            <input type="text" name="rooms" value={this.state.rooms} onChange={this.handleChange} />
            
            <label for="bathrooms">Salle de Bain</label>
            <input type="text" name="bathrooms" value={this.state.bathrooms} onChange={this.handleChange} />
            
            <label for="max_guests">Maximum visiteurs</label>
            <input type="text" name="max_guests" value={this.state.max_guests} onChange={this.handleChange} />
           
            <label for="price_by_night"> Prix par Jour</label>
            <input type="text" name="price_by_night" value={this.state.price_by_night} onChange={this.handleChange} />
{/*            
            <label for="available"> Disponible</label>
            <input type="text" name="available" value={this.state.available} onChange={this.handleChange} />
            */}
            <Button size="small" value="Enregistrer" handleClick={this.handleClick} />
        </div>
        )}
}
export default withRouter(UpdatePlace);