import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import movieSubDetailsReducer from "./movieSubDetailsReducer";

export default combineReducers({
  movies: movieReducer,
  subDetails: movieSubDetailsReducer
});
