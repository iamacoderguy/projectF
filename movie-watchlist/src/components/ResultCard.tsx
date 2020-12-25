import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

interface Props {
  movie: any;
}

const ResultCard: React.FC<Props> = ({ movie }) => {
  const {
    addMovieToWatchList,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);
  const watchlistDisabled =
    watchlist.find((watch) => watch.id === movie.id) !== undefined ||
    watched.find((watch) => watch.id === movie.id) !== undefined;
  const watchedDisabled =
    watched.find((watch) => watch.id === movie.id) !== undefined;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`${process.env.REACT_APP_IMG_API}${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchList(movie)}
          >
            Add to Watchlist
          </button>
          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
