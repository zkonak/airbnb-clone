import React from 'react';
import {searchService} from '../../services';


import Select from "react-dropdown-select";


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            cityList: [],
            error: null
        };
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

  
     handleChange=(e)=>{
 
        console.log(e);
        this.props.history.push('/places?city='+e[0].value);
        this.props.history.go();
       }

    render() {
       
        const options = this.state.cityList.map(d => ({
            "value" : d.name,
            "label" : d.name
          }));
       
        return (
            <>
           
                {this.state.error && <p>{this.state.error}</p>}
               
               
                <Select options={options} onChange={this.handleChange.bind(this) } placeholder="Choisir une Ville"/>
             
            </>
        )
    }
}

export default SearchBar;