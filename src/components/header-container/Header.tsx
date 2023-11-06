import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import user_img from '../../images/header-images/enot.png';

const Header = () => {
    return (
        <div className={css.Header}>
            <div className={css.Header_container}>
                <NavLink to={'/movies'} className={css.Header_logo}>MoviesDB</NavLink>
                <div className={css.Header_menu}>
                    <NavLink to={'/movies'}>Movies</NavLink>
                    <NavLink to={'/genres'}>Genres</NavLink>
                    <NavLink to={'/search'}>Search</NavLink>
                </div>
                <div className={css.Header_user}>
                    <div>
                        <img src={user_img} alt="user_image"/>
                    </div>
                    <p>Username</p>
                </div>
            </div>
        </div>
    );
};

export {Header};