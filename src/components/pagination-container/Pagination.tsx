import React, {FC, useEffect, useState} from 'react';

import css from './Pagination.module.css';
import {SetURLSearchParams} from "react-router-dom";

interface IProps {
    totalPages: number,
    currentPage: number,
    setQuery: SetURLSearchParams
}

const Pagination: FC<IProps> = ({currentPage, setQuery, totalPages} ) => {
    const [currentPages, setCurrentPages] = useState<any[]>([]);

    const changePage = (numPage: number) => {
        setQuery((page) => {
            page.set('page', `${numPage}`);
            return page;
        })
    }

    const prev = () => {
        setQuery((page) => {
            page.set('page', `${+page.get('page') - 1}`);
            return page;
        })
    }

    const next = () => {
        setQuery((page) => {
            page.set('page', `${+page.get('page') + 1}`);
            return page;
        })
    }

    useEffect(() => {
        const pages: (string | number)[] = [];

        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }

        let arrPages = [...pages];

        if (pages.length < 6) {
            arrPages = pages
        }

        else if (currentPage >= 1 && currentPage <= 3) {
            arrPages = [1, 2, 3, 4, '...', pages.length]
        }

        else if (currentPage === 4) {
            const sliced = pages.slice(0, 5);
            arrPages = [...sliced, '...', pages.length];
        }

        else if (currentPage > 4 && currentPage < pages.length - 2) {
            const sliced1 = pages.slice(currentPage - 2, currentPage)
            const sliced2 = pages.slice(currentPage, currentPage + 1)
            arrPages = ([1, '... ', ...sliced1, ...sliced2, ' ...', pages.length])
        }

        else if (currentPage > pages.length - 3) {
            const sliced = pages.slice(pages.length - 4)
            arrPages = ([1, '...', ...sliced])
        }

        setCurrentPages(arrPages);
    }, [currentPage, totalPages]);

    return (
        <div className={css.Pagination}>
            <button
                id={'button'}
                disabled={currentPage === 1}
                onClick={() => {
                prev();
            }} >Prev</button>

            {
                currentPages.map((page) => (
                    <button
                        id={'button'}
                        disabled={page === '...' || page === ' ...' || page === '... '}
                        key={page}
                        onClick={() => {
                            changePage(page);
                        }}
                        className={`${currentPage === page ? css.active : ''}`}
                    >
                        {page}
                    </button>
                ))
            }

            <button
                id={'button'}
                disabled={currentPage === totalPages}
                onClick={() => {
                next();
            }}>Next</button>
        </div>
    );
};

export {Pagination};