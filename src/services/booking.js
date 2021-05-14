import api from './api';

const bookingService = {
     getBookings: async () => {
       

        return await api.get('/bookings');
     },
    addBooking: async(check_in,check_out,place_id,user_id)=> {
        const booking = {check_in,check_out,place_id,user_id};
      console.log(booking);
        return await api.post('/bookings',booking);
   
    },

//     updatePlace: async(user_id,city_id,name,description,rooms ,bathrooms,max_guests,price_by_night,available,placeId)=> {
//         const place = {user_id,placeId,city_id,name,description,rooms ,bathrooms,max_guests,price_by_night,available};
// console.log(place)
//         return await api.patch('/places/'+ placeId,place);
   
//     }
deleteBooking: async(user_id,check_in,check_out, bookingId)=> {
  const book = {user_id,check_in,check_out, bookingId};
console.log(book)
  return await api.patch('/bookings/'+ bookingId);

}
};
export default bookingService