import {instance} from "./api";

export const usersApi = {
    getUsers() {
        instance.get('users').then(response => response)
    }
}