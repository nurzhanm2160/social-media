import instance from './api';

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, { status });
    },
};
