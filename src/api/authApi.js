import instance from './api';

export const authApi = {
    authMe() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe, captcha = null) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha });
    },
    logout() {
        return instance.delete(`auth/login`);
    },
};
