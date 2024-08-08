import axios from 'axios';
const api = axios.create();


const configure = () => {

    api.defaults.baseURL = process.env.REACT_APP_API_BASE_URL
    
    api.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        return Promise.reject(error);
      }
    );
  
};


configure();

export default api;
