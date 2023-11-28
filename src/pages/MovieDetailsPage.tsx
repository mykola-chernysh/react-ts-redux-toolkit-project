import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import css from './MovieDetailsPage.module.css'
import {MovieDetails} from "../components";
import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux";

const MovieDetailsPage = () => {
    const {id} = useParams();
    const {movie} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getById({id}));
    }, [id, dispatch]);

    return (
        <div className={css.MoviesDetailsPage}>
            {
                movie && <MovieDetails movie={movie}/>
            }
        </div>
    );
};

export {MovieDetailsPage};