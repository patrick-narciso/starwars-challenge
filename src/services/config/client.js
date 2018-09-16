import axios from 'axios';

let axiosInstance = axios.create({
  baseURL: 'https://swapi.co/api'
});

module.exports = axiosInstance;
