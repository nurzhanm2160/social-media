import { authApi } from '../../api/authApi';
import { securityApi } from '../../api/securityApi';
import { $fixMe } from '../../type';
import { StateType } from '../reduxStore';
import { ThunkAction } from 'redux-thunk';
import { ResultCodeForCaptcha, ResultCodesEnum } from '../../api/api';

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const LOGOUT = 'auth/LOGOUT';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

type InitialStateType = typeof initialState;
type ThunkType = ThunkAction<void, StateType, unknown, ActionType>;

const initialState = {
    messages: [] as string[],
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null,
};

export const authReducer = (state = initialState, action: ActionType): InitialStateType => {
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

interface SetAuthDataActionPayloadType {
    id: number;
    email: string;
    login: string;
}

interface SetAuthDataActionType {
    type: typeof SET_AUTH_USER_DATA;
    payload: SetAuthDataActionPayloadType;
}

export const setAuthDataAC = (id: number, email: string, login: string): SetAuthDataActionType => ({
    type: SET_AUTH_USER_DATA,
    payload: { id, email, login },
});

interface SetCaptchaUrlActionType {
    type: typeof SET_CAPTCHA_URL;
    captchaUrl: string;
}

const setCaptchaUrl = (captchaUrl: string): SetCaptchaUrlActionType => ({
    type: SET_CAPTCHA_URL,
    captchaUrl,
});

interface LogoutActionType {
    type: typeof LOGOUT;
}

export const logoutAC = (): LogoutActionType => ({ type: LOGOUT });

type ActionType = SetAuthDataActionType | SetCaptchaUrlActionType | LogoutActionType;

export const authMeThunkCreator = (): ThunkType => {
    return async (dispatch) => {
        const response = await authApi.authMe();
        const { id, email, login } = response.data;
        if (response.resultCode === ResultCodesEnum.Success) {
            dispatch(setAuthDataAC(id, email, login));
        }
    };
};

export const getCaptchaUrlThunkCreator = (): ThunkType => {
    return async (dispatch) => {
        const response = await securityApi.getCaptcha();
        const captchaUrl = response.url;
        dispatch(setCaptchaUrl(captchaUrl));
    };
};

export const login = (
    email: string,
    password: string,
    rememberMe = false,
    captcha: $fixMe,
): ThunkType => {
    return async (dispatch) => {
        const response = await authApi.login(email, password, rememberMe, captcha);
        if (response.resultCode === ResultCodesEnum.Success) {
            dispatch(authMeThunkCreator());
        } else if (response.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrlThunkCreator());
        }
    };
};

export const logoutThunkCreator = (): ThunkType => {
    return async (dispatch) => {
        const response = await authApi.logout();
        if (response.data.resultCode === ResultCodesEnum.Success) {
            dispatch(logoutAC());
        }
    };
};
