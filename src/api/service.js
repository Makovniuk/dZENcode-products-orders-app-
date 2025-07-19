import axios from 'axios';

export default axios.create({
  baseURL: 'https://64f6d8019d7754084952aa15.mockapi.io/api/v1/',
  headers: { 'Content-Type': 'application/json' },
});
