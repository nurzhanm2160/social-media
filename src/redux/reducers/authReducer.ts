// import { authApi, securityApi } from '../../api';
// import { BaseThunkType, InferActionsType } from '../reduxStore';
// import { ResultCodeForCaptcha, ResultCodesEnum } from '../../api/api';
// import { $fixMe } from '../../type';
//
// const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA' as const;
// const LOGOUT = 'auth/LOGOUT' as const;
// const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL' as const;
//
// type InitialStateType = typeof initialState;
// type ActionsType = InferActionsType<typeof actions>;
// type ThunkType = BaseThunkType<ActionsType>;
//
// const initialState = {
//     messages: [] as string[],
//     id: null as number | null,
//     email: null as string | null,
//     login: null as string | null,
//     isAuth: false as boolean,
//     captchaUrl: null as string | null,
// };
//
// export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
//     switch (action.type) {
//         case SET_AUTH_USER_DATA:
//             return {
//                 ...state,
//                 ...action.payload,
//                 isAuth: true,
//             };
//         case LOGOUT:
//             return {
//                 ...state,
//                 isAuth: false,
//             };
//         case SET_CAPTCHA_URL:
//             return {
//                 ...state,
//                 captchaUrl: action.captchaUrl,
//             };
//         default:
//             return state;
//     }
// };
//
// export const actions = {
//     setAuthDataAC: (id: number, email: string, login: string) => ({
//         type: SET_AUTH_USER_DATA,
//         payload: { id, email, login },
//     }),
//     setCaptchaUrl: (captchaUrl: string) => ({
//         type: SET_CAPTCHA_URL,
//         captchaUrl,
//     }),
//     logoutAC: () => ({ type: LOGOUT }),
// };
//
// export const authMeThunkCreator = (): ThunkType => {
//     return async (dispatch) => {
//         const response = await authApi.authMe();
//         const { id, email, login } = response.data;
//         if (response.resultCode === ResultCodesEnum.Success) {
//             dispatch(actions.setAuthDataAC(id, email, login));
//         }
//     };
// };
//
// export const getCaptchaUrlThunkCreator = (): ThunkType => {
//     return async (dispatch) => {
//         const response = await securityApi.getCaptcha();
//         const captchaUrl = response.url;
//         dispatch(actions.setCaptchaUrl(captchaUrl));
//     };
// };
//
// export const login = (
//     email: string,
//     password: string,
//     rememberMe = false,
//     captcha: string | null,
// ): $fixMe => {
//     return async (dispatch: $fixMe) => {
//         const response = await authApi.login(email, password, rememberMe, captcha);
//         if (response.resultCode === ResultCodesEnum.Success) {
//             await dispatch(authMeThunkCreator());
//         } else if (response.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
//             await dispatch(getCaptchaUrlThunkCreator());
//         }
//     };
// };
//
//
//
// export const logoutThunkCreator = (): ThunkType => {
//     return async (dispatch) => {
//         const response = await authApi.logout();
//         if (response.data.resultCode === ResultCodesEnum.Success) {
//             dispatch(actions.logoutAC());
//         }
//     };
// };

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authApi, securityApi } from '../../api';
import { ResultCodeForCaptcha, ResultCodesEnum } from '../../api/api';

// const SET_AUTH_USER_DATA = createAction<{ id: number; email: string; login: string }>(
//     'auth/SET_AUTH_USER_DATA',
// );
// const LOGOUT = createAction('auth/LOGOUT');
// const SET_CAPTCHA_URL = createAction<string>('auth/SET_CAPTCHA_URL');

const initialState = {
    messages: [] as string[],
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthData: (state, action) => {
            const { id, email, login } = action.payload;
            state.id = id;
            state.email = email;
            state.login = login;
            state.isAuth = true;
        },
        logout: (state) => {
            state.isAuth = false;
        },
        setCaptchaUrl: (state, action) => {
            state.captchaUrl = action.payload;
        },
    },
});

export const authMe = createAsyncThunk('auth/authMe', async () => {
    const response = await authApi.authMe();
    const { id, email, login } = response.data;
    if (response.resultCode === ResultCodesEnum.Success) {
        return { id, email, login };
    }
});

export const getCaptchaUrl = createAsyncThunk('auth/getCaptchaUrl', async () => {
    const response = await securityApi.getCaptcha();
    const captchaUrl = response.url;
    return { captchaUrl };
});

export const login = createAsyncThunk(
    'auth/login',
    async ({
        email,
        password,
        rememberMe = false,
        captcha,
    }: {
        email: string;
        password: string;
        rememberMe: boolean;
        captcha: string | null;
    }) => {
        const response = await authApi.login(email, password, rememberMe, captcha);
        if (response.resultCode === ResultCodesEnum.Success) {
            const authResponse = await authApi.authMe();
            const { id, email, login } = authResponse.data;
            return { id, email, login };
        } else if (response.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            const captchaResponse = await securityApi.getCaptcha();
            const captchaUrl = captchaResponse.url;
            return { captchaUrl };
        }
    },
);

export const logout = createAsyncThunk('auth/logout', async () => {
    const response = await authApi.logout();
    if (response.data.resultCode === ResultCodesEnum.Success) {
        return {};
    }
});
