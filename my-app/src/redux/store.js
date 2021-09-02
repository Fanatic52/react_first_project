import profileReducer from "./reducers/profile-reducer";
import messagesReducer from "./reducers/messages-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";

let store = {
     _state: {
         profilePage: {
             posts: [
                 {id: 1, message: 'hi bro', likes: 12},
                 {id: 2, message: 'you look very well', likes: 13},
             ],
             newPostText: ''
         },
         messagePage: {
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
         },
    },
    _callSubscriber() {
        throw new Error("you must change _callSubscriber before uses it!");
    },

    getState() {
        return this._state;
    },

    subscribe(observe) {
        this._callSubscriber = observe;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messagesReducer(this._state.messagePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber();
    },
};

window.state = store.getState();
export default store;