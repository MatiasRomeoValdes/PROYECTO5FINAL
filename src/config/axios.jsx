import axios from 'axios'

const backendUrlLocal = "http://localhost:8000"
const backendUrlProd = "https://apiexpress-il8i.onrender.com"
const axiosClient = axios.create( {
  baseURL: backendUrlLocal
} )

export default axiosClient