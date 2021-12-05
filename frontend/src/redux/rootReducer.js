import { combineReducers } from "redux";
import { echo } from "./echo";

export const rootReducer = combineReducers({
  echo,
});
