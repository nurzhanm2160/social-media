import instance from './api';
import { GetUsersType } from '../type';

export const usersApi = {
    getUsers(page = 1, count = 10) {
        return instance
            .get<GetUsersType>(`users?page=${page}&count=${count}`)
            .then((res) => res.data);
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`);
    },
};
