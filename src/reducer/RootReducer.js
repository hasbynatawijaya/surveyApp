import { combineReducers } from "redux";
import asyncReducer from "../reducer/AsyncReducer";

export default combineReducers({
  async: asyncReducer
});
