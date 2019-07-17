import { combineReducers } from "redux";
import asyncReducer from "../reducer/AsyncReducer";
import questionReducer from "../reducer/QuestionReducer";

export default combineReducers({
  async: asyncReducer,
  question: questionReducer
});
