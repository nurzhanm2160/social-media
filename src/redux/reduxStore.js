import {createStore, combineReducers} from 'redux'
import {dialogsReducer} from "./reducers/dialogsReducer";
import {profileReducer} from "./reducers/profileReducer";
import {usersReducer} from "./reducers/usersReducer";


let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
})

export let store = createStore(rootReducer)