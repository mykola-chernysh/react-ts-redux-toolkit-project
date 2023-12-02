import React, {FC, useEffect} from 'react';

import css from './MovieVideo.module.css';
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {movieActions} from "../../../../redux";

interface IProps {
    id: number
}

const MovieVideo: FC<IProps> = ({id}) => {
    const {videos} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const trailer = videos.filter(item => item.type === 'Trailer');

    useEffect(() => {
        dispatch(movieActions.getVideos({id: `${id}`}));
    }, [dispatch, id]);

    return (
        <>
            <h4 className={css.trailer_title} id={'trailer_title'}>Trailer:</h4>

            <div className={css.trailer} id={'trailer'}>

                <iframe
                    width="900"
                    height="500"
                    src={`https://www.youtube.com/embed/${trailer.length && trailer[0].key}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                >
                </iframe>

            </div>
        </>
    );
};

export {MovieVideo};