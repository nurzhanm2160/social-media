import { usersApi } from '../../api/usersApi';
import { updateObjectInArray } from '../../utils/objectHelpers';
import { $fixMe, UserType } from '../../type';

const SET_USERS = 'users/SET_USERS';
const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const SET_USER_ID = 'users/SET_USER_ID';

type InitialState = typeof initialState;

const initialState = {
    users: [] as UserType[],
    count: 10,
    page: 1,
    term: '',
    friend: true,
    totalCount: 0,
    isFetching: false,
    userId: 17352,
};

export const usersReducer = (state = initialState, action: ActionType): InitialState => {
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

interface SetUsersTypeAction {
    type: typeof SET_USERS;
    users: UserType[];
}
export const setUsers = (users: UserType[]): SetUsersTypeAction => ({
    type: SET_USERS,
    users,
});
interface FollowActionType {
    type: typeof FOLLOW;
    userId: number;
}
export const follow = (userId: number): FollowActionType => ({ type: FOLLOW, userId });
interface UnfollowTypeAction {
    type: typeof UNFOLLOW;
    userId: number;
}
export const unfollow = (userId: number): UnfollowTypeAction => ({ type: UNFOLLOW, userId });
interface SetCurrentPageActionType {
    type: typeof SET_CURRENT_PAGE;
    page: number;
}

export const setCurrentPage = (page: number): SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    page,
});
interface SetTotalCountActionType {
    type: typeof SET_TOTAL_COUNT;
    totalCount: number;
}
export const setTotalCount = (totalCount: number): SetTotalCountActionType => ({
    type: SET_TOTAL_COUNT,
    totalCount,
});
interface ToggleIsFetchingActionType {
    type: typeof TOGGLE_IS_FETCHING;
    isFetching: boolean;
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});
interface SetUserIdType {
    type: typeof SET_USER_ID;
    userId: number;
}
export const setUserId = (userId: number): SetUserIdType => ({ type: SET_USER_ID, userId });

type ActionType =
    | SetUsersTypeAction
    | FollowActionType
    | UnfollowTypeAction
    | SetTotalCountActionType
    | ToggleIsFetchingActionType
    | SetUserIdType
    | SetCurrentPageActionType;

export const getUsersThunkCreator = (page: number, count: number) => {
    return async (dispatch: $fixMe) => {
        dispatch(toggleIsFetching(true));

        const response = await usersApi.getUsers(page, count);

        dispatch(toggleIsFetching(false));
        const { items } = response.data;
        dispatch(setUsers(items));
    };
};

export const getUsersTotalCountThunkCreator = () => {
    return async (dispatch: $fixMe) => {
        const response = await usersApi.getUsers();
        const { totalCount } = response.data;
        dispatch(setTotalCount(totalCount));
    };
};

const followUnfollowFlow = (apiMethod: $fixMe, actionCreator: $fixMe, userId: number) => {
    return async (dispatch: $fixMe) => {
        const response = await apiMethod(userId);
        if (response.data.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
    };
};

export const followSuccessThunkCreator = (userId: number) => {
    return async (dispatch: $fixMe) => {
        const apiMethod = usersApi.follow.bind(usersApi);
        dispatch(followUnfollowFlow(apiMethod, follow, userId));
    };
};

export const unfollowSuccessThunkCreator = (userId: number) => {
    return async (dispatch: $fixMe) => {
        const apiMethod = usersApi.unfollow.bind(usersApi);
        dispatch(followUnfollowFlow(apiMethod, unfollow, userId));
    };
};
