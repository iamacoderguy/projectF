import React from 'react';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';
const DEFAULT_IMG_URL = 'https://image.winudf.com/v2/image/dXMuaWhhd3MudHJpYWwudHJpYWxfc2NyZWVuXzFfMTUwNzA3MTU2MV8wNzU/screen-1.jpg?fakeurl=1&type=.jpg'

type MovieProps = {
  poster_path: string;
  overview: string;
  title: string;
  vote_average: number;
}

const setVoteClass = (vote: number) => {
  if (vote >= 8) {
    return 'green';
  }

  if (vote >= 6) {
    return 'orange';
  }

  return 'red';
}

const Movie: React.FC<MovieProps> = (props) => (
  <div className="movie">
    <img 
      src={
        props.poster_path
          ? (IMG_API + props.poster_path)
          : DEFAULT_IMG_URL
      }
      alt={props.title}
    />
    <div className="movie-info">
      <h3>{props.title}</h3>
      <span className={`tag ${setVoteClass(props.vote_average)}`}>{props.vote_average}</span>
    </div>
    <div className="movie-over">
      <h2>Overview:</h2>
      <p>{props.overview}</p>
    </div>
  </div>
);

export default Movie;