import {
  useEffect,
  useState,
} from "react";
import Movie from "./components/Movie";

const DISCOVER_API = 'https://api.themoviedb.org/3/discover/movie?api_key=0a56464ba011b7978e91559a8e51483e&sort_by=popularity.desc&page=2';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=0a56464ba011b7978e91559a8e51483e&sort_by=popularity.desc&query=';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchStr, setSearchStr] = useState('');

  useEffect(() => {
    fetchMovies(DISCOVER_API);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchStr) {
      fetchMovies(SEARCH_API + searchStr);
    }
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(event.target.value);
  }

  const fetchMovies = (api: string) => {
    fetch(api)
    .then(res => res.json())
    .then(data => setMovies(data.results));
  }

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="search"
            placeholder="Search..."
            onChange={handleSearchChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.map((movie: any) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;
