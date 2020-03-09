// code borrowed from https://hackernoon.com/110percent-complete-jwt-authentication-with-django-and-react-2020-iejq34ta

//change this? don't use localStorage, use state instead
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 5000,
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    'Content-Type': 'application/json',
    accept: 'application/json'
  }
});

export default axiosInstance;
