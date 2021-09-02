import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";
import messagesReducer from "./reducers/messages-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;