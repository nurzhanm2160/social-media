import { usersApi } from '../../api/usersApi';
import instance from '../../api/api';
import { updateObjectInArray } from '../../utils/objectHelpers';

const SET_USERS = 'users/SET_USERS';
const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const SET_USER_ID = 'users/SET_USER_ID';

const initialState = {
    users: [],
    count: 10,
    page: 1,
    term: '',
    friend: true,
    totalCount: 0,
    isFetching: false,
    userId: 17352,
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.users };
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.userId, { followed: true }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.userId, { followed: false }),
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                page: action.page,
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case SET_USER_ID:
            return {
                ...state,
                userId: action.userId,
            };
        default:
            return state;
    }
};

export const setUsers = (users) => ({ type: SET_USERS, users });
export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setUserId = (userId) => ({ type: SET_USER_ID, userId });

export const getUsersThunkCreator = (page, count) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        const response = await usersApi.getUsers(page, count);

        dispatch(toggleIsFetching(false));
        const { items } = response.data;
        dispatch(setUsers(items));
    };
};

export const getUsersTotalCountThunkCreator = () => {
    return async (dispatch) => {
        const response = await usersApi.getUsers();
        const { totalCount } = response.data;
        dispatch(setTotalCount(totalCount));
    };
};

const followUnfollowFlow = (apiMethod, actionCreator, userId) => {
    return async (dispatch) => {
        const response = await apiMethod(userId);
        if (response.data.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
    };
};

export const followSuccessThunkCreator = (userId) => {
    return async (dispatch) => {
        const apiMethod = usersApi.follow.bind(usersApi);
        const actionCreator = follow;

        dispatch(followUnfollowFlow(apiMethod, actionCreator, userId));
    };
};

export const unfollowSuccessThunkCreator = (userId) => {
    return async (dispatch) => {
        const apiMethod = usersApi.unfollow.bind(usersApi);
        const actionCreator = unfollow;

        dispatch(followUnfollowFlow(apiMethod, actionCreator, userId));
    };
};
