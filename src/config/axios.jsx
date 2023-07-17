import axios from 'axios'




const backendUrlLocal = "https://apifainal.onrender.com"

const backendUrlProd = "https://apifainal.onrender.com"

const axiosClient = axios.create( {

  baseURL: backendUrlLocal

} )




export default axiosClient