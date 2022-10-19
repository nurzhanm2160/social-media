import instance from '../../api/api';
import { profileApi } from '../../api/profileApi';

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const REMOVE_POST = 'profile/REMOVE_POST';

const initialState = {
    posts: [
        { name: 'nurik2160', message: 'post 1', id: 1 },
        { name: 'dauren', message: 'post 2', id: 2 },
        { name: 'narkoz520', message: 'post 3', id: 3 },
    ],
    profile: null,
    status: '',
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const text = {
                name: 'nurik2160',
                message: action.postText,
                id: state.posts.length,
            };

            return { ...state, posts: [...state.posts, text] };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter((item) => item.id !== action.postId),
            };
        default:
            return state;
    }
};

export const addPostAC = (text) => ({ type: ADD_POST, postText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const removePost = (postId) => ({ type: REMOVE_POST, postId });

export const getProfileThunkCreator = (userId) => {
    return async (dispatch) => {
        const response = await profileApi.getProfile(userId);
        dispatch(setUserProfile(response.data));
    };
};

export const getStatusThunkCreator = (userId) => {
    return async (dispatch) => {
        const response = await profileApi.getStatus(userId);
        dispatch(setStatus(response.data));
    };
};

export const updateStatusThunkCreator = (status) => {
    return async (dispatch) => {
        await profileApi.updateStatus(status);
    };
};
