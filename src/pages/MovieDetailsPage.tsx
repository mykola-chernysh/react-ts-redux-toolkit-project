import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {MovieDetails} from "../components";
import {moviesService} from "../services";
import {IMovieDetails} from "../interfaces";

const MovieDetailsPage = () => {
    const {id} = useParams();
    const [movie, setMovie  ] = useState<IMovieDetails>();

    useEffect(() => {
        moviesService.getById(id).then(({data}) => setMovie(data));
    }, []);

    return (
        <div>
            {movie && <MovieDetails movie={movie}/>}
        </div>
    );
};

export {MovieDetailsPage};