
import { useState, useEffect } from "react";
import { get } from "../utils/httpClient";
import { useParams } from "react-router-dom";
import styles from "./MovieDetail.module.css"

export function MovieDetail(){
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        get("/movie/" + movieId).then(data => {
            setMovie(data);
        })
    }, [movieId])
    if (!movie) {
        return null
    }

    const imgURL ="https://image.tmdb.org/t/p/w500" + movie.poster_path
    return (
        <div className={styles.detailContainer} >
            <img className={`${styles.col} ${styles.movieImg}`} src={imgURL} alt={ movie.title }/>
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p><strong>Title: </strong>{ movie.title}</p>
                { movie.genres.map(genre => genre.name).join(', ') }
                <p><strong>Description: </strong>{ movie.overview }</p>
            </div>
        </div>
    )
        
}