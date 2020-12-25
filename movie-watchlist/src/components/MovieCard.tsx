import React from "react";
import MovieControls from "./MovieControls";

interface Props {
  movie: any;
  type: "watchlist" | "watched";
}

const MovieCard = ({ movie, type }: Props) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      {movie.poster_path ? (
        <img
          src={`${process.env.REACT_APP_IMG_API}${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
      ) : (
        <div className="filler-poster" />
      )}

      <MovieControls type={type} movie={movie} />
    </div>
  );
};

export default MovieCard;
