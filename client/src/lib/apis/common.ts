import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
