
let rerenderEntireTree = () => {
    console.log('render')
}

export let state = {
    posts: [
        {name: "nurik2160", message: "post 1"},
        {name: "dauren", message: "post 2"},
        {name: "narkoz520", message: "post 3"},
    ],
    dialogs: [
        {id: 1, name: "Даурен"},
        {id: 2, name: "Нуркен"},
        {id: 3, name: "Кусайын"},
        {id: 4, name: "Быржан"},
    ],
    messages: [
        {message: "Салам"},
        {message: "Как дела?"},
        {message: "Что делаешь?"},
        {message: "Как ты?"},
    ]
}


export const addPost = (postText) => {
    const text = {
        name: "nurik2160",
        message: postText
    }
    state.posts.push(text)
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}