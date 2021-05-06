import api from './api';

const homeService = {
    getPlaces: async (cityName) => {
        let city="";
      
        if(cityName)
         city=cityName;

        /* else 
         city="Paris"*/

        
        return await api.get('/places?cityName='+city, null);
    }
};






export default homeService;