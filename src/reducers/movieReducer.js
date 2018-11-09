import { GET_MOVIES, GET_MOVIE, GET_DETAILS_MOVIE } from "../actions/types";

const initialState = {
  movies: [],
  detailsMovie: {},
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
    case GET_DETAILS_MOVIE:
      return {
        ...state,
        detailsMovie: action.payload
      };
    default:
      return state;
  }
}
