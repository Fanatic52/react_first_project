import React from "react";
import {Route} from "react-router-dom";

import './App.css';

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Messages/MessagesContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Sidebar/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile />} />
                <Route path='/dialogs'
                       render={() => <MessagesContainer />} />
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
