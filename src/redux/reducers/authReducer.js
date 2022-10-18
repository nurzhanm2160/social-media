import { authApi } from '../../api/authApi';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const LOGOUT = 'LOGOUT';

const initialState = {
    messages: [],
    id: null,
    email: null,
    login: null,
    isAuth: false,
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
        default:
            return state;
    }
};

export const setAuthDataAC = (id, email, login) => ({
    type: SET_AUTH_USER_DATA,
    payload: { id, email, login },
});

export const logoutAC = () => ({ type: LOGOUT });

export const authMeThunkCreator = () => {
    return async (dispatch) => {
        await authApi.authMe().then((response) => {
            const { id, email, login } = response.data.data;
            if (response.data.resultCode === 0) {
                dispatch(setAuthDataAC(id, email, login));
            }
        });
    };
};

export const login = (email, password, rememberMe = false) => {
    return async (dispatch) => {
        await authApi.login(email, password, rememberMe).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(authMeThunkCreator());
            }
        });
    };
};

export const logoutThunkCreator = () => {
    return async (dispatch) => {
        await authApi.logout().then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(logoutAC());
            }
        });
    };
};
