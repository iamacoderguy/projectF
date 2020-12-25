export type AppState = {
  watchlist: any[],
  watched: any[],
  initialized: boolean,
  addMovieToWatchList: (movie: any) => void,
  removeMoveFromWatchList: (id: string) => void,
  addMovieToWatched: (movie: any) => void,
  moveToWatchlist: (movie: any) => void,
  removeFromWatched: (id: string) => void,
}
const AppReducer = (state: AppState, { type, payload } : {type: string, payload: any}) => {
  switch (type) {
    case "INITIALIZE":
      return {
        ...state,
        ...payload,
        initialized: true,
      }

    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [payload, ...state.watchlist],
      }

    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(movie => movie.id !== payload),
      }

    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(movie => movie.id !== payload.id),
        watched: [payload, ...state.watched],
      }

    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(movie => movie.id !== payload.id),
        watchlist: [payload, ...state.watchlist], 
      }

    case "REMOVE_MOVIE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter(movie => movie.id !== payload),
      }

    default:
      return state;
  }
};

export default AppReducer;
