const ADD_POST = 'ADD_POST'

const initialState = {
    posts: [
        {name: "nurik2160", message: "post 1"},
        {name: "dauren", message: "post 2"},
        {name: "narkoz520", message: "post 3"},
    ],
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const text = {
                name: "nurik2160",
                message: action.postText
            }

            state.posts.push(text)
            return state
        default:
            return state
    }
}

export const addPost = (text) => ({type: ADD_POST, postText: text})