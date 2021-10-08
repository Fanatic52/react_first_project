import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import {reducer as formReducer} from 'redux-form';
import thunkMiddleware from "redux-thunk";
import appReducer from "./reducers/app-reducer";
import profileReducer from "./reducers/profile-reducer";
import messagesReducer from "./reducers/messages-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import usersReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";


let reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    messagePage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers( applyMiddleware(thunkMiddleware) ));
window.__store__ = store;

export default store;