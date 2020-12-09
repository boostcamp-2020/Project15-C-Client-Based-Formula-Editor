import axios from 'axios';

export const BASE_URL = 'http://115.85.182.96:3000/api';
//export const BASE_URL = 'http://localhost:3000/api';

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
