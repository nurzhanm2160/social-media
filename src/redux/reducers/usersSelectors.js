export const getUsersSelector = (state) => {
    return state.usersPage.users;
};

export const getPageSelector = (state) => {
    return state.usersPage.page;
};

export const getCountSelector = (state) => {
    return state.usersPage.count;
};
export const getTotalCountSelector = (state) => {
    return state.usersPage.totalCount;
};
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};
