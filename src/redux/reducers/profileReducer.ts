import { profileApi } from '../../api/profileApi';
import { authApi } from '../../api/authApi';
import { $fixMe, PhotosType, PostType, ProfileType } from '../../type';
import { StateType } from '../reduxStore';
import { ThunkAction } from 'redux-thunk';

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const REMOVE_POST = 'profile/REMOVE_POST';
const SET_PHOTO = 'profile/SET_PHOTO';

type InitialType = typeof initialState;
type ThunkType = ThunkAction<void, StateType, unknown, ActionType>;

const initialState = {
    posts: [
        { name: 'nurik2160', message: 'post 1', id: 1 },
        { name: 'dauren', message: 'post 2', id: 2 },
        { name: 'narkoz520', message: 'post 3', id: 3 },
    ] as PostType[],
    profile: null as ProfileType | null,
    status: '' as string,
};

export const profileReducer = (state = initialState, action: ActionType): InitialType => {
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
        case SET_PHOTO:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos,
                } as ProfileType,
            };
        default:
            return state;
    }
};

type ActionType =
    | AddPostActionType
    | SetUserProfileType
    | SetStatusActionType
    | RemovePostActionType
    | SetPhotoActionType;

interface AddPostActionType {
    type: typeof ADD_POST;
    postText: string;
}
export const addPostAC = (text: string): AddPostActionType => ({ type: ADD_POST, postText: text });
interface SetUserProfileType {
    type: typeof SET_USER_PROFILE;
    profile: ProfileType;
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
    type: SET_USER_PROFILE,
    profile,
});
interface SetStatusActionType {
    type: typeof SET_STATUS;
    status: string;
}
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status });
interface RemovePostActionType {
    type: typeof REMOVE_POST;
    postId: number;
}
export const removePost = (postId: number): RemovePostActionType => ({ type: REMOVE_POST, postId });
interface SetPhotoActionType {
    type: typeof SET_PHOTO;
    photos: PhotosType;
}
export const setPhoto = (photos: PhotosType): SetPhotoActionType => ({ type: SET_PHOTO, photos });

export const getProfileThunkCreator = (userId: number): ThunkType => {
    return async (dispatch: $fixMe) => {
        const response = await profileApi.getProfile(userId);
        dispatch(setUserProfile(response));
    };
};

export const getStatusThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        const response = await profileApi.getStatus(userId);
        dispatch(setStatus(response));
    };
};

export const updateStatusThunkCreator = (status: string): ThunkType => {
    return async () => {
        await profileApi.updateStatus(status);
    };
};

export const saveAvatarThunkCreator = (avatar: $fixMe): ThunkType => {
    return async (dispatch) => {
        const response = await profileApi.uploadAvatar(avatar);

        if (response.resultCode === 0) {
            dispatch(setPhoto(response.data.photos));
        }
    };
};

export const updateProfileThunkCreator = (profile: ProfileType): ThunkType => {
    return async (dispatch) => {
        const response = await profileApi.updateProfile(profile);
        const user = await authApi.authMe();

        if (response.resultCode === 0) {
            await dispatch(getProfileThunkCreator(user.data.id));
        }
    };
};
