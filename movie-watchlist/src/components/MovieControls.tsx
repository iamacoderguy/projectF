import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

interface Props {
  movie: any;
  type: "watchlist" | "watched";
}

const MovieControls = ({ movie, type }: Props) => {
  const {
    removeMoveFromWatchList,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <FontAwesomeIcon className="fa-fw far" icon={faEye} />
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMoveFromWatchList(movie.id)}
          >
            <FontAwesomeIcon className="fa-fw fa" icon={faTimes} />
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <FontAwesomeIcon className="fa-fw far" icon={faEyeSlash} />
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <FontAwesomeIcon className="fa-fw fa" icon={faTimes} />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
