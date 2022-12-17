// import { createStore, combineReducers, applyMiddleware, compose, Action } from 'redux';
// import thunk, { ThunkAction } from 'redux-thunk';
//
// import { dialogsReducer } from './reducers/dialogsReducer';
// import { profileReducer } from './reducers/profileReducer';
// import { usersReducer } from './reducers/usersReducer';
// import { authReducer } from './reducers/authReducer';
//
// const rootReducer = combineReducers({
//     dialogsPage: dialogsReducer,
//     profilePage: profileReducer,
//     usersPage: usersReducer,
//     auth: authReducer,
// });
//
// const store = createStore(
//     rootReducer,
//     compose(
//         applyMiddleware(thunk),
//         // @ts-expect-error
//         // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//         window?.__REDUX_DEVTOOLS_EXTENSION__(),
//     ),
// );
//
// type RootReducerType = typeof rootReducer;
// export type StateType = ReturnType<RootReducerType>;
//
// export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
//     R,
//     StateType,
//     unknown,
//     A
// >;
//
// export type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U }
//     ? U
//     : never;
//
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { dialogsSlice } from './reducers/dialogsReducer';
import { profileSlice } from './reducers/profileReducer';
import { usersSlice } from './reducers/usersReducer';
import { authSlice } from './reducers/authReducer';

const rootReducer = {
    // dialogsPage: dialogsReducer,
    // profilePage: profileReducer,
    // usersPage: usersReducer,
    auth: authSlice.reducer,
    usersPage: usersSlice.reducer,
    profileReducer: profileSlice.reducer,
    dialogPage: dialogsSlice.reducer,
};

// type RootReducerType = typeof rootReducer;
// export type StateType = ReturnType<RootReducerType>;

export const store = configureStore({
    reducer: rootReducer,
});
