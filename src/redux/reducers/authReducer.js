import { authApi } from '../../api/authApi';
import { securityApi } from '../../api/securityApi';

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const LOGOUT = 'auth/LOGOUT';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

const initialState = {
    messages: [],
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            };
        case LOGOUT:
            return {
                ...state,
                isAuth: false,
            };
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            };
        default:
            return state;
    }
};

export const setAuthDataAC = (id, email, login) => ({
    type: SET_AUTH_USER_DATA,
    payload: { id, email, login },
});

const setCaptchaUrl = (captchaUrl) => ({
    type: SET_CAPTCHA_URL,
    captchaUrl,
});

export const logoutAC = () => ({ type: LOGOUT });

export const authMeThunkCreator = () => {
    return async (dispatch) => {
        const response = await authApi.authMe();
        const { id, email, login } = response.data.data;
        if (response.data.resultCode === 0) {
            dispatch(setAuthDataAC(id, email, login));
        }
    };
};

export const getCaptchaUrlThunkCreator = () => {
    return async (dispatch) => {
        const response = await securityApi.getCaptcha();
        const captchaUrl = response.data.url;
        dispatch(setCaptchaUrl(captchaUrl));
    };
};

export const login = (email, password, rememberMe = false, captcha) => {
    return async (dispatch) => {
        const response = await authApi.login(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
            dispatch(authMeThunkCreator());
        } else if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrlThunkCreator());
        }
    };
};

export const logoutThunkCreator = () => {
    return async (dispatch) => {
        const response = await authApi.logout();
        if (response.data.resultCode === 0) {
            dispatch(logoutAC());
        }
    };
};
