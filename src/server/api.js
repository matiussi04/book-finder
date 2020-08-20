import axios from 'axios';

const key = "AIzaSyDN-_Xjyt4Pnwuk4VRs7X2dpNXM2DEG5Sk";
const api = axios.create({ baseURL: " https://www.googleapis.com/books/v1" });

export { api,key };