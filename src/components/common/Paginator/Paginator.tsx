import React, { FC, useState } from 'react';
import cn from 'classnames';
import styles from './Paginator.module.css';

interface PaginatorProps {
    totalCount: number;
    count: number;
    page: number;
    setCurrentPage: (currentPage: number) => void;
}

const Paginator: FC<PaginatorProps> = ({ totalCount, count, page, setCurrentPage }) => {
    const pagesCount = Math.ceil(totalCount / count);

    const pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / count);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * count + 1;
    const rightPortionPageNumber = portionNumber * count;

    const onPageChanged = (currentPage: number): void => {
        setCurrentPage(currentPage);
    };

    return (
        <div>
            {portionNumber > 1 && (
                <button onClick={() => setPortionNumber((prevState) => prevState - 1)}>PREV</button>
            )}
            {pages
                .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((item, index) => {
                    return (
                        <span
                            className={cn(
                                {
                                    [styles.activePage]: item === page,
                                },
                                styles.pageNumber,
                            )}
                            key={index}
                            onClick={() => onPageChanged(item)}
                        >
                            {item}
                        </span>
                    );
                })}
            {portionCount > portionNumber && (
                <button onClick={() => setPortionNumber((prevState) => prevState + 1)}>NEXT</button>
            )}
        </div>
    );
};

export default Paginator;
