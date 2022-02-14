import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getByIdMovie} from "../../store";
import css from "./MovieInfoPage.module.css";

const MovieInfoPage = () => {

    const {id} = useParams();
    const {movie} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getByIdMovie(id));
    }, [dispatch, id]);

    const {poster_path, title, release_date, overview, vote_average, budget} = movie;

    const navigate = useNavigate()
    const back = () => {
        navigate(-1);
    };

    return (
        <div>
            <button className={css.buttonBack} onClick={back}>Back</button>
            <div className={css.MovieInfoPage}>
                <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt={movie.title}/>
                <div className={css.column}>
                    <h2>{title}</h2>
                    <div>release date: {release_date}</div>
                    <div>overview: {overview}</div>
                    <div>vote_average: {vote_average}</div>
                    <div>budget: {budget}$</div>
                </div>
            </div>
        </div>

    );
};

export {MovieInfoPage};