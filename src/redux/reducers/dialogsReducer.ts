import { $fixMe } from '../../type';

const ADD_MESSAGE = 'ADD_MESSAGE';

type InitialStateType = typeof initialState;

interface DialogType {
    id: number;
    name: string;
}

interface MessageType {
    message: string;
}

const initialState = {
    dialogs: [
        { id: 1, name: 'Даурен' },
        { id: 2, name: 'Нуркен' },
        { id: 3, name: 'Кусайын' },
        { id: 4, name: 'Быржан' },
    ] as DialogType[],
    messages: [
        { message: 'Салам' },
        { message: 'Как дела?' },
        { message: 'Что делаешь?' },
        { message: 'Как ты?' },
    ] as MessageType[],
};

export const dialogsReducer = (state = initialState, action: $fixMe): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return { ...state, messages: [...state.messages, action.message] };
        default:
            return state;
    }
};

interface AddMessageActionType {
    type: typeof ADD_MESSAGE;
    message: string;
}

export const addMessageAC = (message: string): AddMessageActionType => ({
    type: ADD_MESSAGE,
    message,
});
