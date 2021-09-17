const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Andrey'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'how are you?'},
        {id: 4, message: 'Yo'},
    ],
    newMessageText: '',
};

const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages,
                    {
                        id: 5,
                        message: state.newMessageText,
                    }
                ],
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText,
            };
        default:
            return state;
    }
}

export const addMessageCreator = () => ({
    type: ADD_MESSAGE
})
export const updateNewMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: text,
})

export default messagesReducer;