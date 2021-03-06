import React from "react";
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}
export type DispatchPropsType = {
    logout: () => void
}

const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    let logBlock = (
        props.isAuth
        ? <div>
            {props.login} - <button onClick={props.logout}>Log out</button>
        </div>
        : <NavLink to={'/login'}>Login</NavLink>
    );
    return (
        <header className={style.header}>
            <div className={style.content}>
                <img src='https://www.focus2move.com/wp-content/uploads/2020/08/Tesla-Roadster-2020-1024-03.jpg' alt="logo"/>
                {"- My Site"}
                <div className={style.loginBlock}>
                    {logBlock}
                </div>
            </div>
        </header>
    )
}

export default Header;