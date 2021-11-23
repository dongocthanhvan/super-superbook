import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://reading-app-thptpm.herokuapp.com/api',
  headers: {
    'accept': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('access_vue_token')
  }
});

export default axiosInstance;