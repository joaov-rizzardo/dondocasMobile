import Constants  from 'expo-constants';
import axios from "axios";

const baseUrl: string = Constants.manifest?.extra !== undefined ? Constants.manifest?.extra.backendApi : ""

const backendApi = axios.create({
    baseURL: baseUrl
})

export default backendApi