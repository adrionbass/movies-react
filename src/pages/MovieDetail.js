
import movie from "./movie.json"
import styles from "./MovieDetail.module.css"

export function MovieDetail(){
    const imgURL ="https://image.tmdb.org/t/p/w500" + movie.poster_path
    return (
        <div>
            <img src={imgURL} alt={ movie.title }/>
            <p><strong>Title: </strong>{ movie.title}</p>
            { movie.genres.map(genre => genre.name).join(', ') }
            <p><strong>Description: </strong>{ movie.overview }</p>
        </div>
    )
        
}