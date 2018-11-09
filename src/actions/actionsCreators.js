import { GET_MOVIES, GET_MOVIE, GET_DETAILS_MOVIE } from "./types";
import axios from "axios";
import { API_KEY } from "../omdbapi";

export const getMovies = () => async dispatch => {
  const res = await axios.get(
    `https://www.omdbapi.com/?s=all&apikey=${API_KEY}`
  );
  dispatch({
    type: GET_MOVIES,
    payload: res.data.Search
  });
};

export const getMovie = id => async dispatch => {
  const res = await axios.get(
    `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
  );
  dispatch({
    type: GET_MOVIE,
    payload: res.data
  });
};

export const getDetailsMovie = id => async dispatch => {
  const res = await axios.get(
    `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
  );
  dispatch({
    type: GET_DETAILS_MOVIE,
    payload: res.data
  });
};
