import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001';

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

export const scanUrl = (url: string) =>
  api.post('/api/scan/', { url });

export const submitReport = (data: { type: string; value: string; description?: string }) =>
  api.post('/api/report/', data);

export const getReports = () =>
  api.get('/api/report/');

export const getAlerts = () =>
  api.get('/api/alerts/');

export const getStats = () =>
  api.get('/api/alerts/stats');

export const chatWithBot = (message: string) =>
  api.post('/api/chatbot/', { message });

export default api;
