import {InferActionsTypes} from "../redux-store";

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Andrey'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'how are you?'},
        {id: 4, message: 'Yo'},
    ] as Array<MessageType>,
};
export type InitialStateType = typeof initialState;

type ActionType = InferActionsTypes<typeof actions>

const messagesReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch(action.type) {
        case 'SN/MESSAGES/ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages,
                    {
                        id: 5,
                        message: action.newMessageText,
                    }
                ],
            };
        default:
            return state;
    }
}

export const actions = {
    addMessage: (newMessageText: string) => ({
        type: 'SN/MESSAGES/ADD_MESSAGE',
        newMessageText,
    } as const),
}

export default messagesReducer;