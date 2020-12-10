import axios from 'axios';

export const BASE_URL = 'https://www.formulachef.tk/api';
//export const BASE_URL = 'http://localhost:3000/api';

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
