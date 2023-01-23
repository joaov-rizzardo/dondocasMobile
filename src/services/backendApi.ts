import axios from "axios";

const backendApi = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_API
})

export default backendApi