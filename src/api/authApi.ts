import instance, { ResultCodeForCaptcha, ResultCodesEnum, ResponseType } from './api';

interface MeResponseDataType {
    id: number;
    email: string;
    login: string;
}

interface LoginResponseType {
    userId: number;
}

export const authApi = {
    authMe() {
        return instance.get<ResponseType<MeResponseDataType>>(`auth/me`).then((res) => res.data);
    },
    login(email: string, password: string, rememberMe: boolean, captcha: null | string = null) {
        return instance
            .post<ResponseType<LoginResponseType, ResultCodesEnum | ResultCodeForCaptcha>>(
                `auth/login`,
                {
                    email,
                    password,
                    rememberMe,
                    captcha,
                },
            )
            .then((res) => res.data);
    },
    logout() {
        return instance.delete(`auth/login`);
    },
};
