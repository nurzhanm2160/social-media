import React from 'react';
import styles from './Paginator.module.css';

const Paginator = ({ totalCount, count, page, setCurrentPage }) => {
    const pagesCount = Math.ceil(totalCount / count);
    const pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
    }

    const onPageChanged = (currentPage) => {
        setCurrentPage(currentPage);
    };

    return (
        <div>
            {pages.map((item, index) => {
                return (
                    <span
                        className={item === page ? styles.activePage : ''}
                        key={index}
                        onClick={() => onPageChanged(item)}
                    >
                        {item}
                    </span>
                );
            })}
        </div>
    );
};

export default Paginator;
