import React, {useEffect} from 'react';

import css from './Genres.module.css';
import {Genre} from "../Genre";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {genreActions} from "../../../redux";

const Genres = () => {
    const {genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [dispatch]);

    return (
        <div className={css.Genres} id={'genre'}>
            {genres && genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};