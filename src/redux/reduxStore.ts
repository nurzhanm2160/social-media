import { createStore, combineReducers, applyMiddleware, compose, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import { dialogsReducer } from './reducers/dialogsReducer';
import { profileReducer } from './reducers/profileReducer';
import { usersReducer } from './reducers/usersReducer';
import { authReducer } from './reducers/authReducer';

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        // @ts-expect-error
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        window?.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);

type RootReducerType = typeof rootReducer;
export type StateType = ReturnType<RootReducerType>;

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
    R,
    StateType,
    unknown,
    A
>;

export type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U }
    ? U
    : never;

export default store;
