import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000'
}, {
  mode: 'no-cors',
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
});

export default instance;