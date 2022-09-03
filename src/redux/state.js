export let store = {
    _state: {
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
    },
    _rerenderEntireTree() {

    },
    addPost(postText) {

    },


    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        switch (action.type) {
            case 'ADD_POST':
                const text = {
                    name: "nurik2160",
                    message: action.postText
                }

                this._state.posts.push(text)
                this._rerenderEntireTree(this._state)
        }
    }


}
