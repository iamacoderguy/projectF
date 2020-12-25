import React, { createContext, useReducer, useEffect } from "react";
import AppReducer, { AppState } from "./AppReducer";

// initial state
const initialState: AppState = {
  watchlist: [],
  watched: [],
  initialized: false,
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
    if (!state.initialized) {
      return;
    }

    fetch("https://content.dropboxapi.com/2/files/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_DROPBOX_KEY}`,
        "Content-Type": "application/octet-stream",
        "Dropbox-API-Arg": JSON.stringify({
          path: process.env.REACT_APP_DROPBOX_PATH,
          mode: { ".tag": "overwrite" },
        }),
      },
      body: JSON.stringify(state),
    }).catch((err) => {
      alert(err);
    });
  }, [state]);

  useEffect(() => {
    fetch("https://content.dropboxapi.com/2/files/download", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_DROPBOX_KEY}`,
        "Dropbox-API-Arg": JSON.stringify({
          path: process.env.REACT_APP_DROPBOX_PATH,
        }),
      },
    })
      .then(async (res: Response) => {
        const result = await res.json();
        dispatch({
          type: "INITIALIZE",
          payload: result,
        });
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

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
        initialized: state.initialized,
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
