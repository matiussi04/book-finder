import axios from 'axios';

const key = "Your Key"
const api = axios.create({ baseURL: " https://www.googleapis.com/books/v1" });

export { api,key };
