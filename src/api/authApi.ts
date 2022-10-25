import instance, { ResultCodeForCaptcha, ResultCodesEnum } from './api';

interface MeResponseType {
    data: { id: number; email: string; login: string };
    resultCode: ResultCodesEnum;
    messages: string[];
}

interface LoginResponseType {
    data: { userId: number };
    resultCode: ResultCodesEnum | ResultCodeForCaptcha;
    messages: string[];
}

interface LogoutResponseType {
    data: {};
}

export const authApi = {
    authMe() {
        return instance.get<MeResponseType>(`auth/me`).then((res) => res.data);
    },
    login(email: string, password: string, rememberMe: boolean, captcha: null | string = null) {
        return instance
            .post<LoginResponseType>(`auth/login`, {
                email,
                password,
                rememberMe,
                captcha,
            })
            .then((res) => res.data);
    },
    logout() {
        return instance.delete(`auth/login`);
    },
};
