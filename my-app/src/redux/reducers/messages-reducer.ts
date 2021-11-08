const ADD_MESSAGE = 'ADD_MESSAGE';

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
type initialStateType = typeof initialState;

const messagesReducer = (state = initialState, action: any): initialStateType => {
    switch(action.type) {
        case ADD_MESSAGE:
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

type AddMessageCreatorActionType = {
    type : typeof ADD_MESSAGE
    newMessageText: string
}

export const addMessageCreator = (newMessageText: string): AddMessageCreatorActionType => ({
    type: ADD_MESSAGE,
    newMessageText,
})

export default messagesReducer;