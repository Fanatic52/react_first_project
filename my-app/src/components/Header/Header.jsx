import React from "react";
import HeaderCss from "./Header.module.css";

const Header = () => {
    return (
        <header className={HeaderCss.header}>
            <img src='https://www.focus2move.com/wp-content/uploads/2020/08/Tesla-Roadster-2020-1024-03.jpg'/>
        </header>
    )
}

export default Header;