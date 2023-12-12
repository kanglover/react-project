import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export * as voteService from './topics';
export * as authService from './authentication';
