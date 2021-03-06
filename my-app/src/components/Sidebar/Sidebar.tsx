import React from 'react';
import NavCss from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar: React.FC = () => {
    return (
        <nav className={NavCss.nav}>
            <div className={NavCss.item}>
                <NavLink to="/profile" activeClassName={NavCss.activeLink}>Profile</NavLink>
            </div>
            <div className={NavCss.item}>
                <NavLink to="/dialogs" activeClassName={NavCss.activeLink}>Messages</NavLink>
            </div>
            <div className={NavCss.item}>
                <NavLink to="/users" activeClassName={NavCss.activeLink}>Users</NavLink>
            </div>
            <div className={NavCss.item}>
                <NavLink to="/news" activeClassName={NavCss.activeLink}>News</NavLink>
            </div>
            <div className={NavCss.item}>
                <NavLink to="/music" activeClassName={NavCss.activeLink}> Music</NavLink>
            </div>
            <div className={NavCss.item}>
                <NavLink to="/settings" activeClassName={NavCss.activeLink}> Settings</NavLink>
            </div>
        </nav>
    )
}

export default Sidebar;