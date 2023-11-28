import React from 'react';

import css from './SearchPage.module.css';
import {SearchMovies} from "../components";

const SearchPage = () => {
    return (
        <div className={css.SearchPage}>
            <SearchMovies/>
        </div>
    );
};

export {SearchPage};