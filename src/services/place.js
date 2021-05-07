import api from './api';

const placeService = {
    getPlace: async (placeId) => {
       

        return await api.get('/places/'+ placeId);
    },
    addPlace: async(city_id,name,description,rooms ,bathrooms,max_guests,price_by_night,available,user_id)=> {
        const place = {city_id,name,description,rooms ,bathrooms,max_guests,price_by_night,available,user_id};
      console.log(place);
        return await api.post('/places',place);
   
    }

};






export default placeService;