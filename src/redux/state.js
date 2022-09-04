import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";

export let store = {
    _state: {
        posts: [
            {name: "nurik2160", message: "post 1"},
            {name: "dauren", message: "post 2"},
            {name: "narkoz520", message: "post 3"},
        ],
        dialogsPage: {
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

    },
    _rerenderEntireTree() {

    },


    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.posts = profileReducer(this._state.posts, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._rerenderEntireTree(this._state)
    }
}


