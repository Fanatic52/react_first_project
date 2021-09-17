import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";
import messagesReducer from "./reducers/messages-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import usersReducer from "./reducers/users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;