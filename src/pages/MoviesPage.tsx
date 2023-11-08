import React from 'react';

import {Movies} from "../components";
import {Outlet} from "react-router-dom";

const MoviesPage = () => {
    return (
        <div>
            <Outlet/>
            <Movies/>
        </div>
    );
};

export {MoviesPage};