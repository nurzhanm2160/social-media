import { InferActionsType } from '../reduxStore';

const ADD_MESSAGE = 'ADD_MESSAGE' as const;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsType<typeof actions>;

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

export const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return { ...state, messages: [...state.messages, { message: action.message }] };
        default:
            return state;
    }
};

export const actions = {
    addMessage: (message: string) => ({
        type: ADD_MESSAGE,
        message,
    }),
};
