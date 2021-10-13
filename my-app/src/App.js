import React, {Component} from "react";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {initializeApp} from "./redux/reducers/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const MessagesContainer = React.lazy(() => import("./components/Messages/MessagesContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends Component {
    catchAllUnhandledErrors = (reason, promise) => {
        reason.promise.catch(e => alert(e.message));
    }


    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>;
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Sidebar/>
                <div className="app-wrapper-content">
                    <React.Suspense fallback={<Preloader/>}>
                        <Switch>
                            <Redirect exact from="/" to="/profile"/>
                            <Route path="/profile/:userId?"
                                   render={() => <ProfileContainer/>}/>
                            <Route path="/dialogs"
                                   render={() => <MessagesContainer/>}/>
                            <Route path="/users"
                                   render={() => <UsersContainer/>}/>
                            <Route path="/news"
                                   render={() => <News/>}/>
                            <Route path="/music"
                                   render={() => <Music/>}/>
                            <Route path="/settings"
                                   render={() => <Settings/>}/>
                            <Route path="/login"
                                   render={() => <Login/>}/>
                            <Route path="*"
                                   render={() => <div>404 - NOT FOUND</div>}/>
                        </Switch>
                    </React.Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }),
)(App);

let AppContainerWithRouter = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default AppContainerWithRouter;
