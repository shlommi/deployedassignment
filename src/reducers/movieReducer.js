import { GET_MOVIES, GET_MOVIE, DELETE_MOVIE } from "../actions/types";

const initialState = {
  movies: [],
  curentEditedMovie: {
    Title: "",
    Year: "",
    Runtime: "",
    Genre: "",
    Director: ""
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case GET_MOVIE:
      return {
        ...state,
        curentEditedMovie: action.payload
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.imdbID !== action.payload)
      };
    default:
      return state;
  }
}
