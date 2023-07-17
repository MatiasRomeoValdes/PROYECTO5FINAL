import axios from 'axios'




const backendUrlLocal = "https://apiexpress-il8i.onrender.com/"

const backendUrlProd = "https://apiexpress-il8i.onrender.com/"

const axiosClient = axios.create( {

  baseURL: backendUrlLocal

} )




export default axiosClient