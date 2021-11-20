import axios from 'axios';
import Loader from '../Loader';

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});


// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    config.headers = {
        'Accept-language' : 'fr'
    }
    
    Loader();
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    console.log("HIDE LOADER")

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosInstance;