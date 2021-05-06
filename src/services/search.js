import api from './api';

const searchService = {
    getCityList: async () => {
       
       
        return await api.get('/city',null);
    }
};






export default searchService;