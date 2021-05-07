import React from 'react';
import {placeService,searchService} from '../../services';
import Button from '../../components/button';

import Select from "react-dropdown-select";



class AddPlaceForm extends React.Component {

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
            cityList:[],
            user_id:localStorage.getItem("user_id")
          
            }
    }

    async componentDidMount() {
       
        // const cityName=this.props.location.query.cityName;
          try {
              const response = await searchService.getCityList();
             
              this.setState({cityList: response.data});
            
             
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
        const {city_id,name,description,rooms ,bathrooms,max_guests,price_by_night,available,user_id} = this.state;
        //const user_id=localStorage.getItem("id_user");
        try {
            console.log(this.state);
            const response = await placeService.addPlace(city_id,name,description,rooms ,bathrooms,max_guests,price_by_night,available,user_id);
            //localStorage.setItem('token', response.data.token);
            console.log(response);
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
        return (
         <div className="signupForm">
          <h1>Ajoutez Une Maison/Un Appartement </h1>
            {this.state.error && <h6>{this.state.error}</h6>}
            
            <label for="name">Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            
            <label for="description">Description</label>
            <textarea type="description" name="description" value={this.state.description} onChange={this.handleChange} />
            <label for="city_id">Ville</label>
            <Select options={options}  name="city_id" placeholder="Choisir une Ville" onChange={this.handleCityChange}/>
                 
            <label for="rooms">Chambres</label>
            <input type="number" name="rooms" value={this.state.rooms} onChange={this.handleChange} />
            
            <label for="bathrooms">Salle de Bain</label>
            <input type="number" name="bathrooms" value={this.state.bathrooms} onChange={this.handleChange} />
            
            <label for="max_guests">Maximum visiteurs</label>
            <input type="number" name="max_guests" value={this.state.max_guests} onChange={this.handleChange} />
           
            <label for="price_by_night"> Prix par Jour</label>
            <input type="number" name="price_by_night" value={this.state.price_by_night} onChange={this.handleChange} />
{/*            
            <label for="available"> Disponible</label>
            <input type="text" name="available" value={this.state.available} onChange={this.handleChange} />
            */}
            <Button size="small" value="Enregistrer" handleClick={this.handleClick} />
        </div>
        )}
}
export default AddPlaceForm;