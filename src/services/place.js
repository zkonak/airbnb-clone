import api from './api';

const placeService = {
    getPlace: async (placeId) => {
       

        return await api.get('/places/'+ placeId);
    },
    addPlace: async(city_id,name,description,rooms ,bathrooms,max_guests,price_by_night,available,user_id)=> {
        const place = {city_id,name,description,rooms ,bathrooms,max_guests,price_by_night,available,user_id};
      console.log(place);
        return await api.post('/places',place);
   
    },

    updatePlace: async(user_id,city_id,name,description,rooms ,bathrooms,max_guests,price_by_night,available,placeId)=> {
        const place = {user_id,placeId,city_id,name,description,rooms ,bathrooms,max_guests,price_by_night,available};
console.log(place)
        return await api.patch('/places/'+ placeId,place);
   
    }


};






export default placeService;