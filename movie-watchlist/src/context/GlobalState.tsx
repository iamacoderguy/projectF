import React, { createContext, useReducer, useEffect } from "react";
import AppReducer, { AppState } from "./AppReducer";

// initial state
const initialState: AppState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist") as string)
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched") as string)
    : [],
  addMovieToWatchList: () => {
    alert("unknown addMovieToWatchList");
  },
  removeMoveFromWatchList: () => {
    alert("unknown removeMoveFromWatchList");
  },
  addMovieToWatched: () => {
    alert("unknown addMovieToWatched");
  },
  moveToWatchlist: () => {
    alert("unknown moveToWatchlist");
  },
  removeFromWatched: () => {
    alert("unknown removeFromWatched");
  },
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // actions
  const addMovieToWatchList = (movie: any) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMoveFromWatchList = (id: string) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const addMovieToWatched = (movie: any) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const moveToWatchlist = (movie: any) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  };

  const removeFromWatched = (id: string) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchList,
        removeMoveFromWatchList,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
