import axios from 'axios';

export const staticEndpoint = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 10000,
})