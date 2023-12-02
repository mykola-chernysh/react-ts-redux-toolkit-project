import React, {FC, useEffect, useState} from 'react';

import css from './MovieImages.module.css';
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {movieActions} from "../../../../redux";

interface IProps {
    id: number
}

const MovieImages: FC<IProps> = ({id}) => {
    const [imageMovie, setImageMovie] = useState<string>(null)

    const {images} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getImages({id: `${id}`}))
    }, [dispatch, id]);

    return (
        <div className={css.Images}>
            <div className={css.Images_container}>
                {
                    images.slice(0, 5).map(image => (
                        <div
                            key={image.file_path}
                            id={'image_media'}
                            className={css.Images_media}
                            onClick={() => setImageMovie(`https://image.tmdb.org/t/p/original${image.file_path}`)}
                        >
                            <img src={`https://image.tmdb.org/t/p/w500${image.file_path}`} alt="file_path"/>
                        </div>
                    ))
                }
            </div>
            <div id={'image_popup'} className={css.Image_popup} style={{display: imageMovie ? 'block' : 'none'}}>
                <span onClick={() => setImageMovie(null)}>&times;</span>

                {
                    imageMovie && <img src={imageMovie} alt="imageMovie"/>
                }
            </div>
        </div>
    );
};

export {MovieImages};