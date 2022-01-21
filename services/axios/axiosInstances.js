import axios from 'axios';

export const mainAxios = axios.create({
  baseURL: 'http://api.test',
});
