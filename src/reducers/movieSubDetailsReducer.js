import { GET_DETAILS_MOVIE } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_DETAILS_MOVIE:
      return [action.payload, ...state];
    default:
      return state;
  }
};
