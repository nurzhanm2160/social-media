// import { profileApi } from '../../api/profileApi';
// import { authApi } from '../../api/authApi';
// import { PhotosType, PostType, ProfileType } from '../../type';
// import { BaseThunkType, InferActionsType } from '../reduxStore';
//
// const ADD_POST = 'profile/ADD_POST' as const;
// const SET_USER_PROFILE = 'profile/SET_USER_PROFILE' as const;
// const SET_STATUS = 'profile/SET_STATUS' as const;
// const REMOVE_POST = 'profile/REMOVE_POST' as const;
// const SET_PHOTO = 'profile/SET_PHOTO' as const;
//
// type InitialType = typeof initialState;
// type ActionsType = InferActionsType<typeof actions>;
// type ThunkType = BaseThunkType<ActionsType>;
//
// const initialState = {
//     posts: [
//         { name: 'nurik2160', message: 'post 1', id: 1 },
//         { name: 'dauren', message: 'post 2', id: 2 },
//         { name: 'narkoz520', message: 'post 3', id: 3 },
//     ] as PostType[],
//     profile: null as ProfileType | null,
//     status: '' as string,
// };
//
// export const profileReducer = (state = initialState, action: ActionsType): InitialType => {
//     switch (action.type) {
//         case ADD_POST:
//             const text = {
//                 name: 'nurik2160',
//                 message: action.postText,
//                 id: state.posts.length,
//             };
//
//             return { ...state, posts: [...state.posts, text] };
//         case SET_USER_PROFILE:
//             return {
//                 ...state,
//                 profile: action.profile,
//             };
//         case SET_STATUS:
//             return {
//                 ...state,
//                 status: action.status,
//             };
//         case REMOVE_POST:
//             return {
//                 ...state,
//                 posts: state.posts.filter((item) => item.id !== action.postId),
//             };
//         case SET_PHOTO:
//             return {
//                 ...state,
//                 profile: {
//                     ...state.profile,
//                     photos: action.photos,
//                 } as ProfileType,
//             };
//         default:
//             return state;
//     }
// };
//
// export const actions = {
//     addPostAC: (text: string) => ({ type: ADD_POST, postText: text }),
//     setUserProfile: (profile: ProfileType) => ({
//         type: SET_USER_PROFILE,
//         profile,
//     }),
//     setStatus: (status: string) => ({ type: SET_STATUS, status }),
//     removePost: (postId: number) => ({ type: REMOVE_POST, postId }),
//     setPhoto: (photos: PhotosType) => ({ type: SET_PHOTO, photos }),
// };
//
// export const getProfileThunkCreator = (userId: number): ThunkType => {
//     return async (dispatch) => {
//         const response = await profileApi.getProfile(userId);
//         dispatch(actions.setUserProfile(response));
//     };
// };
//
// export const getStatusThunkCreator = (userId: number): ThunkType => {
//     return async (dispatch) => {
//         const response = await profileApi.getStatus(userId);
//         dispatch(actions.setStatus(response));
//     };
// };
//
// export const updateStatusThunkCreator = (status: string): ThunkType => {
//     return async () => {
//         await profileApi.updateStatus(status);
//     };
// };
//
// export const saveAvatarThunkCreator = (avatar: File): ThunkType => {
//     return async (dispatch) => {
//         const response = await profileApi.uploadAvatar(avatar);
//
//         if (response.resultCode === 0) {
//             dispatch(actions.setPhoto(response.data.photos));
//         }
//     };
// };
//
// export const updateProfileThunkCreator = (profile: ProfileType): ThunkType => {
//     return async (dispatch) => {
//         const response = await profileApi.updateProfile(profile);
//         const user = await authApi.authMe();
//
//         if (response.resultCode === 0) {
//             await dispatch(getProfileThunkCreator(user.data.id));
//         }
//     };
// };

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PostType, ProfileType } from '../../type';
import { authApi, profileApi } from '../../api';

const initialState = {
    posts: [
        { name: 'nurik2160', message: 'post 1', id: 1 },
        { name: 'dauren', message: 'post 2', id: 2 },
        { name: 'narkoz520', message: 'post 3', id: 3 },
    ] as PostType[],
    profile: null as ProfileType | null,
    status: '' as string,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addPost: (state, action) => {
            const text = {
                name: 'nurik2160',
                message: action.payload.postText,
                id: state.posts.length,
            } as PostType;

            state.posts = [...state.posts, text];
        },
        setUserProfile: (state, action) => {
            state.profile = action.payload.profile;
        },
        setStatus: (state, action) => {
            state.status = action.payload.status;
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter((item) => item.id !== action.payload.postId);
        },
        setPhoto: (state, action) => {
            if (state.profile?.photos) {
                state.profile.photos = action.payload.photos;
            }
        },
    },
});

export const getProfile = createAsyncThunk(
    'profile/getProfile',
    async ({ userId }: { userId: number }) => {
        return await profileApi.getProfile(userId);
    },
);

export const getStatus = createAsyncThunk(
    'profile/getStatus',
    async ({ userId }: { userId: number }) => {
        return await profileApi.getStatus(userId);
    },
);

export const updateStatus = createAsyncThunk(
    'profile/updateStatus',
    async ({ status }: { status: string }) => {
        await profileApi.updateStatus(status);
    },
);

export const saveAvatar = createAsyncThunk(
    'profile/saveAvatar',
    async ({ avatar }: { avatar: File }) => {
        const response = await profileApi.uploadAvatar(avatar);

        return response.data.photos;
    },
);

export const updateProfile = createAsyncThunk(
    'profile/updateProfile',
    async ({ profile }: { profile: ProfileType }) => {
        const response = await profileApi.updateProfile(profile);
        const user = await authApi.authMe();

        if (response.resultCode === 0) {
            return user.data.id;
        }
    },
);
