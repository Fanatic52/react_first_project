import React from "react";
import styles from "./Preloader.module.css";

let Preloader: React.FC = () => {
    return <div className={styles.preloader}>
            <div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div>
        </div>;
}

export default Preloader;