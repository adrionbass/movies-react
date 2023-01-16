import React from "react";
import styles from './MovieCard.module.css'

const MovieCard = ({movie}) =>{
    const imgURL ="https://image.tmdb.org/t/p/w300" + movie.poster_path

    return (
        <li className={ styles.movieCard }>
            <img 
            width={ 230 } 
            height={ 345 } 
            className={ styles.movieImg }  
            src={ imgURL } 
            alt={ movie.title } />
            <div>
            { movie.title }
            </div>
        </li>
    )
}

export default MovieCard;