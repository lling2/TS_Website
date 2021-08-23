import axios from 'axios';

const rq = axios.create({
  baseURL: "localhost:8000",
  timeout: 3000
});

// rq.interceptors.request.use(() => {

// })