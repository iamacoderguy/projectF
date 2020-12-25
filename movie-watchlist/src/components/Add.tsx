import React, { useState } from "react";
import ResultCard from "./ResultCard";

interface Props {}

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_THE_MOVIE_DB_KEY}&sort_by=popularity.desc&query=`;

const Add = (props: Props) => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);

    const res = await fetch(SEARCH_API + e.target.value);
    const data = await res.json();
    if (!data.errors) {
      setMovies(data.results);
    } else {
      setMovies([]);
    }
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={handleChange}
            />
          </div>

          {movies.length > 0 && (
            <ul className="results">
              {movies.map((movie: any) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
