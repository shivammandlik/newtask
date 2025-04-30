import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // change as needed
});

// Add token to headers
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token'); // or sessionStorage
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});
export default API;
