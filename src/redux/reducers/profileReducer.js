import instance from '../../api/api';
import { profileApi } from '../../api/profileApi';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    posts: [
        { name: 'nurik2160', message: 'post 1' },
        { name: 'dauren', message: 'post 2' },
        { name: 'narkoz520', message: 'post 3' },
    ],
    profile: null,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const text = {
                name: 'nurik2160',
                message: action.postText,
            };

            return { ...state, posts: [...state.posts, text] };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        default:
            return state;
    }
};

export const addPostAC = (text) => ({ type: ADD_POST, postText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getProfileThunkCreator = (userId) => {
    return async (dispatch) => {
        profileApi.getProfile(userId).then((response) => {
            dispatch(setUserProfile(response.data));
        });
    };
};
