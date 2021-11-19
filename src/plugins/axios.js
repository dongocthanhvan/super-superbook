import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '',
  headers: {
    'accept': 'application/json'
  }
});

export default axiosInstance;