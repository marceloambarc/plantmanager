import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.12:7000',
});

export default api;