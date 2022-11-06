import axios from 'axios';

export const httpService = axios.create({
  baseURL: 'http://dev3.dansmultipro.co.id/api/recruitment/positions.json',
  timeout: 15000,
});

export const httpDetailPage = axios.create({
  baseURL: 'http://dev3.dansmultipro.co.id/api/recruitment/positions',
  timeout: 15000,
});
