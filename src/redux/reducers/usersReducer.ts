import { usersApi } from '../../api/usersApi';
import { updateObjectInArray } from '../../utils/objectHelpers';
import { $fixMe, UserType } from '../../type';
import { BaseThunkType, InferActionsType } from '../reduxStore';

const SET_USERS = 'users/SET_USERS' as const;
const FOLLOW = 'users/FOLLOW' as const;
const UNFOLLOW = 'users/UNFOLLOW' as const;
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE' as const;
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT' as const;
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING' as const;
const SET_USER_ID = 'users/SET_USER_ID' as const;

type InitialState = typeof initialState;
type ThunkType = BaseThunkType<ActionType>;

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
        case 'users/SET_USERS':
            return { ...state, users: action.users };
        case 'users/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.userId, { followed: true }),
            };
        case 'users/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.userId, { followed: false }),
            };
        case 'users/SET_CURRENT_PAGE':
            return {
                ...state,
                page: action.page,
            };
        case 'users/SET_TOTAL_COUNT':
            return {
                ...state,
                totalCount: action.totalCount,
            };
        case 'users/TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case 'users/SET_USER_ID':
            return {
                ...state,
                userId: action.userId,
            };
        default:
            return state;
    }
};

export const actions = {
    setUsers: (users: UserType[]) => ({
        type: SET_USERS,
        users,
    }),
    follow: (userId: number) => ({ type: FOLLOW, userId }),
    unfollow: (userId: number) => ({ type: UNFOLLOW, userId }),
    setCurrentPage: (page: number) => ({
        type: SET_CURRENT_PAGE,
        page,
    }),
    setTotalCount: (totalCount: number) => ({
        type: SET_TOTAL_COUNT,
        totalCount,
    }),
    toggleIsFetching: (isFetching: boolean) =>
        ({
            type: TOGGLE_IS_FETCHING,
            isFetching,
        } as const),
    setUserId: (userId: number) => ({ type: SET_USER_ID, userId }),
};

type ActionType = InferActionsType<typeof actions>;

export const getUsersThunkCreator = (
    page: number,
    count: number,
    term: string,
    isFriend: boolean | null,
): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));

        const response = await usersApi.getUsers(page, count, term, isFriend);

        dispatch(actions.toggleIsFetching(false));
        const { items } = await response;
        dispatch(actions.setUsers(items));
    };
};

export const getUsersTotalCountThunkCreator = (): ThunkType => {
    return async (dispatch) => {
        const response = await usersApi.getUsers();
        const { totalCount } = response;
        dispatch(actions.setTotalCount(totalCount));
    };
};

const _followUnfollowFlow = (apiMethod: $fixMe, actionCreator: $fixMe, userId: number) => {
    return async (dispatch: $fixMe) => {
        const response = await apiMethod(userId);
        if (response.data.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
    };
};

export const followSuccessThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        const apiMethod = usersApi.follow.bind(usersApi);
        await dispatch(_followUnfollowFlow(apiMethod, actions.follow, userId));
    };
};

export const unfollowSuccessThunkCreator = (userId: number): ThunkType => {
    return async (dispatch) => {
        const apiMethod = usersApi.unfollow.bind(usersApi);
        await dispatch(_followUnfollowFlow(apiMethod, actions.unfollow, userId));
    };
};
