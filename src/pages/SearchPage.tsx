import React from 'react';

import css from './SearchPage.module.css';
import {SearchForm} from "../components";

const SearchPage = () => {
    return (
        <div className={css.SearchPage}>
            <SearchForm/>
        </div>
    );
};

export {SearchPage};