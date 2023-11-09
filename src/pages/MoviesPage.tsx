import React from 'react';

import css from './MoviesPage.module.css';
import {Movies} from "../components";

const MoviesPage = () => {
    return (
        <div className={css.MoviesPage}>
            <Movies/>
        </div>
    );
};

export {MoviesPage};