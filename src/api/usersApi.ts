import instance, { ResponseType } from './api';
import { GetUsersType } from '../type';

export const usersApi = {
    getUsers(page = 1, count = 10) {
        return instance
            .get<GetUsersType>(`users?page=${page}&count=${count}`)
            .then((res) => res.data);
    },
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`).then((res) => res.data);
    },
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`).then((res) => res.data);
    },
};
