import instance from './api';

export const securityApi = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`);
    },
};
