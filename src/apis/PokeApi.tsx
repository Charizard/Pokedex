import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
  maxAge: 300 * 60 * 1000
});

export default axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 1000,
  adapter: cache.adapter
});