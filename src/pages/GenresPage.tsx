import React from 'react';
import {Outlet} from "react-router-dom";

import css from './GenresPage.module.css';
import {Genres} from "../components";

const GenresPage = () => {
    return (
        <div className={css.GenresPage}>
            <Genres/>
            <Outlet/>
        </div>
    );
};

export {GenresPage};