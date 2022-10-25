import { StateType } from '../reduxStore';
import { UserType } from '../../type';

export const getUsersSelector = (state: StateType): UserType[] => {
    return state.usersPage.users;
};

export const getPageSelector = (state: StateType): number => {
    return state.usersPage.page;
};

export const getCountSelector = (state: StateType): number => {
    return state.usersPage.count;
};
export const getTotalCountSelector = (state: StateType): number => {
    return state.usersPage.totalCount;
};
export const getIsFetching = (state: StateType): boolean => {
    return state.usersPage.isFetching;
};
