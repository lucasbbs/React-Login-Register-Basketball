import axios from 'axios';
const url =
  'https://p7yiiqo9y0.execute-api.us-east-1.amazonaws.com/dev' ||
  'http://localhost:3001';

export const api = axios.create({
  baseURL: url,
});
