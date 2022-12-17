import { $fixMe, UserType } from '../../type';

export const getUsersSelector = (state: $fixMe): UserType[] => {
    return state.usersPage.users;
};

export const getPageSelector = (state: $fixMe): number => {
    return state.usersPage.page;
};

export const getCountSelector = (state: $fixMe): number => {
    return state.usersPage.count;
};
export const getTotalCountSelector = (state: $fixMe): number => {
    return state.usersPage.totalCount;
};
export const getIsFetching = (state: $fixMe): boolean => {
    return state.usersPage.isFetching;
};
