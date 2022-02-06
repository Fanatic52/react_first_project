import React, {useState} from "react";
import styles from "./Paginator.module.css";
import cs from "classnames";

type PropsType = {
    pagesSize: number
    totalItemsCount: number
    currentPage?: number
    onPageChanged?: (pageNumber: number) => void
    portionSize?: number
};

let Paginator: React.FC<PropsType> = ({pagesSize,
                                       totalItemsCount,
                                       currentPage = 1,
                                       onPageChanged = () => {},
                                       portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pagesSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={styles.paginator}>
        { portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span
                    className={cs(styles.pageNumber, { [styles.selectedPage]: currentPage === p } )}
                    onClick={() => {onPageChanged(p) }}
                    key={p}>
                    {p}
                </span>
        })}
        { portionCount > portionNumber &&
            <button
                onClick={() => { setPortionNumber(portionNumber + 1) }}>
                NEXT
            </button>}
    </div>;
}

export default Paginator;