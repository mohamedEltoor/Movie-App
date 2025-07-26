import { useMovieContext } from './context/GlobalContext';
import MovieCard from './MovieCard.js'
import "./Watchlist.css"

const Watchelist = ()=> {
    const MovieContext  = useMovieContext();
    return(
    <div className="watche-list">
    <div className="container">
    <div className="main-heading">
    <h1>My Watchlist</h1>
    <span className="movies-count">
    {MovieContext.watchlist.length}
    {MovieContext.watchlist.length === 1 ? "Movie" : "Movies"}
    </span>
    </div>
    {MovieContext.watchlist.length > 0 ? (<div className="movie-grid">
      {MovieContext.watchlist.map((movie)=>(
          <MovieCard key={movie.imdbID} movie={movie} type="watchlist"/>
          ))}
        </div>) : (<h2 className="no-movies">No Movies in your list, add some!</h2>
        )}
    </div>
    </div>
    );
}
export default Watchelist;


