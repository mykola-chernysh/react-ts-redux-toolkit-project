import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {Rating} from "react-simple-star-rating";


import default_image from "../../../images/default-card-image.png";
import css from "./SearchMovies.module.css";
import {IMovie} from "../../../interfaces";

interface IProps {
    movie: IMovie
}

const SearchMovie: FC<IProps> = ({movie}) => {
    const {id, title, poster_path, vote_average} = movie;

    return (
        <Link to={`/movies/${id}`} className={css.SearchMovies} id={'search_movies'}>
            <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : default_image} alt="film_poster"/>
            <Rating initialValue={vote_average} readonly={true} size={18} iconsCount={10} allowFraction={true}/>
            <p>{title}</p>
        </Link>
    );
};

export {SearchMovie};