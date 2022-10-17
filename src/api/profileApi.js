import instance from './api';

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
};
