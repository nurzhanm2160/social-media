import instance, { ResponseType } from './api';
import { $fixMe, PhotosType, ProfileType } from '../type';

interface UploadPhotoResponseType {
    photos: PhotosType;
}

export const profileApi = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`).then((res) => res.data);
    },
    getStatus(userId: number) {
        return instance.get<string>(`/profile/status/${userId}`).then((res) => res.data);
    },
    updateStatus(status: string) {
        return instance
            .put<ResponseType>(`/profile/status`, {
                status,
            })
            .then((res) => res.data);
    },
    uploadAvatar(avatar: $fixMe) {
        const formData = new FormData();
        formData.append('image', avatar);
        return instance
            .put<ResponseType<UploadPhotoResponseType>>('/profile/photo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((res) => res.data);
    },
    updateProfile(profile: ProfileType) {
        return instance
            .put<ResponseType<ProfileType>>(`/profile/`, profile)
            .then((res) => res.data);
    },
};
