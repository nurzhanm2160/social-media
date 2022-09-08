const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...action.users]}
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
        default:
            return state
    }
}



export const setUsersAC = (users) => ({type: SET_USERS, users})
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})



