import api from './api';

const placeService = {
    getPlace: async (placeId) => {
       

        return await api.get('/places/'+ placeId);
    },
    addPlace: async(city_id,name,description,rooms ,bathrooms,max_guests,price_by_night,available)=> {
        return await api.post('/places');
   
    }

};






export default placeService;