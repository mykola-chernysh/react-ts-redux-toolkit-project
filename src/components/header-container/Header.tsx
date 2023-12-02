import React from 'react';
import {NavLink} from "react-router-dom";
import ReactSwitch from "react-switch";
import {LinearProgress} from "@mui/material";

import css from './Header.module.css';
import user_img from '../../images/header-images/enot.png';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {themeActions} from "../../redux";

const Header = () => {
    const {isLoading} = useAppSelector(state => state.movies);
    const {mode} = useAppSelector(state => state.darkMode);
    const dispatch = useAppDispatch();

    mode && document.body.classList.add('Dark');

    const changeMode = () => {
        document.body.classList.toggle('Dark');
        dispatch(themeActions.toggleDarkMode());
    }

    return (
        <div className={css.Header} id={'header'}>
            {
                !isLoading ? <div className={css.Header_linear_progress} id={'header_linear'}></div> : <LinearProgress className={css.Header_linear_progress_loader}/>
            }
            <div className={css.Header_container}>
                <NavLink to={'/movies'} className={css.Header_logo}>MovieDB</NavLink>
                <div className={css.Header_menu}>
                    <NavLink to={'/movies'}>Movies</NavLink>
                    <NavLink to={'/genres'}>Genres</NavLink>
                    <NavLink to={'/search'}>Search</NavLink>
                </div>
                <div className={css.Header_right}>
                    <div className={css.Switch}>
                        <label>{!mode ? 'Light mode' : 'Dark mode'}</label>
                        <ReactSwitch checked={mode} onChange={changeMode} height={20} width={40} checkedIcon={false} uncheckedIcon={false}/>
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