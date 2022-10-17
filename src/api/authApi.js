import instance from './api';

export const authApi = {
    authMe() {
        return instance.get(`auth/me`);
    },
};
