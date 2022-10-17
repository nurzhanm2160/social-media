import { usersApi } from '../../api/usersApi';
import instance from '../../api/api';

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_ID = 'SET_USER_ID';

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
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: !user.followed };
                    }
                    return user;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: !user.followed };
                    }
                    return user;
                }),
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

        await usersApi.getUsers(page, count).then((response) => {
            dispatch(toggleIsFetching(false));
            const { items } = response.data;
            dispatch(setUsers(items));
        });
    };
};

export const getUsersTotalCountThunkCreator = () => {
    return async (dispatch) => {
        await usersApi.getUsers().then((response) => {
            const { totalCount } = response.data;
            dispatch(setTotalCount(totalCount));
        });
    };
};

export const followSuccessThunkCreator = (userId) => {
    return async (dispatch) => {
        await usersApi.follow(userId).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(follow(userId));
            }
        });
    };
};

export const unfollowSuccessThunkCreator = (userId) => {
    return async (dispatch) => {
        await usersApi.unfollow(userId).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(unfollow(userId));
            }
        });
    };
};
