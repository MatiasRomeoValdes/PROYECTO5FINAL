import axios from 'axios'




const backendUrlLocal = "https://apiexpress2.onrender.com"

const backendUrlProd = "https://apiexpress2.onrender.com"

const axiosClient = axios.create( {

  baseURL: backendUrlLocal

} )




export default axiosClient