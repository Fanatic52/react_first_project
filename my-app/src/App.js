import React from "react";
import {Route} from "react-router-dom";

import './App.css';

import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Sidebar />
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer />} />
                <Route path='/dialogs'
                       render={() => <MessagesContainer />} />
                <Route path='/users'
                       render={() => <UsersContainer />} />
                <Route path='/news'
                       render={() => <News />} />
                <Route path='/music'
                       render={() => <Music />} />
                <Route path='/settings'
                       render={() => <Settings />} />
            </div>
        </div>
    );
}

export default App;
