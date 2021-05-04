import api from './api';

const userService = {
    signup: async (first_name,last_name,email,password,role) => {
        const user = {first_name,last_name,email,password,role};

        return await api.post('/signup', user);
    },
    login: async (email,password) => {
        const user = {email,password};

        return await api.post('/signin', user);
    },

};






export default userService;