import React, {FC, useState} from 'react'
import styles from "./Paginator.module.css";
import cn from 'classnames'
type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

const Paginator: FC<PropsType> = ({ totalItemsCount, currentPage = 1, pageSize, onPageChanged, portionSize = 20 }) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={styles.paginator}>
        { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }
        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map(p => {
                return <span className={cn ({
                    [styles.selectedPage]: currentPage === p
                }, styles.pageNumber)}
                             onClick={() => {
                                 onPageChanged(p)
                             }}> {p} </span>
            })}
        { portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
    </div>
}

export default Paginator