import axios from 'axios';


const api = () => {
    axios.defaults.baseURL = 'http://localhost:800';
    axios.defaults.withCredentials = true
}
export default api;