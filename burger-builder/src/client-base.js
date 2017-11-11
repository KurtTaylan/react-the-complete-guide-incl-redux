import axios from 'axios';

const baseClient = axios.create({
    baseURL: 'https://react-my-burger-6a216.firebaseio.com/'
});

export default baseClient;