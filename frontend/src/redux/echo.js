import { echoConstants } from "../constants";

const initialState = {
  loading: false,
  texts: [],
  hasError: false,
  error: null,
};

export function echo(state = initialState, action) {
  switch (action.type) {
    case echoConstants.GET_TEXT_REQUEST:
      return { ...state, loading: true, hasError: false };
    case echoConstants.GET_TEXT_SUCCESS:
      return {
        ...state,
        loading: false,
        texts: [...state.texts, action.payload],
      };
    case echoConstants.GET_TEXT_ERROR:
      return {
        ...state,
        loading: false,
        hasError: true,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
