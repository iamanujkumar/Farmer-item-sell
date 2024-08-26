import axios from "axios"
import {HOST} from "../../Constants.js"

 export const apiClient = axios.create({
    baseURL:HOST,
})
