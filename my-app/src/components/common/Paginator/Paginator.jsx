import React from "react";
import styles from "./Paginator.module.css";

let Paginator = ({pageSize, totalCount, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalCount / pageSize);
    let pagesNumbers = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesNumbers.push(i);
    }
    let objectsPages = pagesNumbers.map(p => {
        return <span className={currentPage === p ? styles.selectedPage : ""}
                     onClick={() => {onPageChanged(p) }}>{p}</span>
    });
    return <div>
        {objectsPages}
    </div>;
}

export default Paginator;