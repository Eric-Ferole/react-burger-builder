import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-1c2c2.firebaseio.com/'
});

export default instance;