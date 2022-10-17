import instance from './api';

export const usersApi = {
    getUsers(page = 1, count = 10) {
        return instance.get(`users?page=${page}&count=${count}`);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
};
