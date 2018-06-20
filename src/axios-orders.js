import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-c49ec.firebaseio.com'
});

export default instance;