import React, {FC} from 'react';
import {Rating} from "react-simple-star-rating";

import css from './Movie.module.css';
import {IMovie} from "../../../interfaces";
import {Link} from "react-router-dom";

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, title, poster_path, vote_average} = movie;

    return (
        <Link to={`/movies/${id}`} className={css.Movie} id={'movie'}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="film_poster"/>
            <Rating initialValue={vote_average} readonly={true} size={18} iconsCount={10} allowFraction={true}/>
            <p>{title}</p>
        </Link>
    );
};

export {Movie};
