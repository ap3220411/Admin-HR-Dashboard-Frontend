import Axios from 'axios';

const instance = Axios.create({
  baseURL: `${window.location.origin}`, 
  
  headers: { 'Content-Type': 'application/json' }
});

export default instance;
