import {
  ASYNC_ACTION_ERROR,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_START,
  ASYNC_ONLOAD_START,
  ASYNC_ONLOAD_FINISH,
  ASYNC_ONLOAD_ERROR
} from "../action/types";

const initialState = {
  asyncAction: false,
  asyncOnLoad: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ASYNC_ACTION_START:
      return { ...state, asyncAction: true };
    case ASYNC_ACTION_FINISH:
      return { ...state, asyncAction: false };
    case ASYNC_ACTION_ERROR:
      return { ...state, asyncAction: false };
    case ASYNC_ONLOAD_START:
      return { ...state, asyncOnLoad: true };
    case ASYNC_ONLOAD_FINISH:
      return { ...state, asyncOnLoad: false };
    case ASYNC_ONLOAD_ERROR:
      return { ...state, asyncOnLoad: false };
    default:
      return state;
  }
}
