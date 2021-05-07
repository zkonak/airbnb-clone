import api from './api';

const placeService = {
    getPlace: async (placeId) => {
       

        return await api.get('/places/'+ placeId);
    },
    addPlace: async(city_id,name,description,rooms ,bathrooms,max_guests,price_by_night,available)=> {
        return await api.post('/places');
   
    },

    updatePlace: async(user_id,placeId,city_id,name,description,rooms ,bathrooms,max_guests,price_by_night,available)=> {
        const place = {user_id,placeId,city_id,name,description,rooms ,bathrooms,max_guests,price_by_night,available};
console.log(place)
        return await api.patch('/places/'+ placeId,place);
   
    }


};






export default placeService;