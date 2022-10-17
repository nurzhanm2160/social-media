const ADD_MESSAGE = 'ADD_MESSAGE';

const initialState = {
    dialogs: [
        { id: 1, name: 'Даурен' },
        { id: 2, name: 'Нуркен' },
        { id: 3, name: 'Кусайын' },
        { id: 4, name: 'Быржан' },
    ],
    messages: [
        { message: 'Салам' },
        { message: 'Как дела?' },
        { message: 'Что делаешь?' },
        { message: 'Как ты?' },
    ],
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            state.messages.push({ message: action.message });
            return { ...state, messages: [...state.messages, action.message] };
        default:
            return state;
    }
};

export const addMessageAC = (message) => ({ type: ADD_MESSAGE, message });
