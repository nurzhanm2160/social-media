import instance from './api';
import { $fixMe, ProfileType } from '../type';

export const profileApi = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`);
    },
    getStatus(userId: number) {
        return instance.get(`/profile/status/${userId}`);
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status`, {
            status,
        });
    },
    uploadAvatar(avatar: $fixMe) {
        const formData = new FormData();
        formData.append('image', avatar);
        return instance.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },
    updateProfile(profile: ProfileType) {
        return instance.put(`/profile/`, profile);
    },
};
