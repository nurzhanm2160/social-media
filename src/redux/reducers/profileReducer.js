const ADD_POST = 'ADD_POST'

export const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const text = {
                name: "nurik2160",
                message: action.postText
            }

            state.push(text)
            return state
        default:
            return state
    }
}

export const addPost = (text) => ({type: ADD_POST, postText: text})