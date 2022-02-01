import axios from "axios"

export const http = axios.create({
    baseURL: 'https://calm-rabbit-86.loca.lt/api/'
})


//http://localhost:5000/api/