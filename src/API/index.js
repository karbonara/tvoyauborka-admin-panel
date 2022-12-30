import axios from 'axios';

const $host = axios.create({
  baseURL: 'http://localhost:3000'
}, {
  mode: 'no-cors',
});

const $authHost = axios.create({
  baseURL: 'http://localhost:3000'
}, {
  mode: 'no-cors',
});

const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export {
  $host,
  $authHost
};