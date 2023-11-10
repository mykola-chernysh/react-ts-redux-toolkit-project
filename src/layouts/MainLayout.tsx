import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {useTheme} from "../hooks";

const MainLayout = () => {
    const {theme} = useTheme();

    return (
        <div className={theme}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};