import instance from './api';

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {
            status,
        });
    },
    uploadAvatar(avatar) {
        const formData = new FormData();
        formData.append('image', avatar);
        return instance.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },
    updateProfile(profile) {
        return instance.put(`/profile/`, profile);
    },
};
