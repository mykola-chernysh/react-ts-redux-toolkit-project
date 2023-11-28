import React from 'react';
import {NavLink} from "react-router-dom";
import ReactSwitch from "react-switch";

import css from './Header.module.css';
import user_img from '../../images/header-images/enot.png';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {themeActions} from "../../redux";

const Header = () => {
    const {theme} = useAppSelector(state => state.theme);
    const dispatch = useAppDispatch();

    localStorage.setItem('theme', `${theme}`);

    const changeTheme = () => {
        if (!theme) {
            document.body.classList.add('Dark');
            dispatch(themeActions.changeTheme());
        } else {
            document.body.classList.remove('Dark');
            dispatch(themeActions.changeTheme());
        }
    }

    return (
        <div className={css.Header} id={'header'}>
            <div className={css.Header_container}>
                <NavLink to={'/movies'} className={css.Header_logo}>MoviesDB</NavLink>
                <div className={css.Header_menu}>
                    <NavLink to={'/movies'}>Movies</NavLink>
                    <NavLink to={'/genres'}>Genres</NavLink>
                    <NavLink to={'/search'}>Search</NavLink>
                </div>
                <div className={css.Header_right}>
                    <div className={css.Switch}>
                        <label>{!theme ? 'Light mode' : 'Dark mode'}</label>
                        <ReactSwitch checked={theme} onChange={changeTheme} height={20} width={40} checkedIcon={false} uncheckedIcon={false}/>
                    </div>
                    <div className={css.Header_user}>
                        <div>
                            <img src={user_img} alt="user_image"/>
                        </div>
                        <p>Username</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Header};