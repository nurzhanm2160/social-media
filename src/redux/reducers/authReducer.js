const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

const initialState = {
    messages: [],
    id: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthDataAC = (id, email, login) => ({type: SET_AUTH_USER_DATA, payload: {id, email, login}})


