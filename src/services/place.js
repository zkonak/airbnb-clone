import api from './api';

const placeService = {
    getPlace: async (placeId) => {
       

        return await api.get('/places/'+ placeId);
    }
};






export default placeService;