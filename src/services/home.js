import api from './api';

const homeService = {
    getPlaces: async () => {
       

        return await api.get('/places?city=Paris', null);
    }
};






export default homeService;