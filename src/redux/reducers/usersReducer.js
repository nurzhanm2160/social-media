const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'


let initialState = {
    users: [],
    count: 10,
    page: 1,
    term: "",
    friend: true,
    totalCount: 0
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users}
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: !user.followed}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: !user.followed}
                    }
                    return user
                })
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                page: action.page
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        default:
            return state
    }
}



export const setUsersAC = (users) => ({type: SET_USERS, users})
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})



