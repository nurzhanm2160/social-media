import axios from 'axios'

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7db3f698-63e3-49d3-8685-19c9d63dbd78"
    }
})