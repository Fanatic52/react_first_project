const ADD_MESSAGE = 'ADD_MESSAGE';

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
};

const messagesReducer = (state = initialState, action) => {
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

export const addMessageCreator = (newMessageText) => ({
    type: ADD_MESSAGE,
    newMessageText,
})

export default messagesReducer;