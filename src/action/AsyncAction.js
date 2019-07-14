import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_ERROR,
  ASYNC_ONLOAD_START,
  ASYNC_ONLOAD_ERROR,
  ASYNC_ONLOAD_FINISH
} from "./types";

export const asyncActionStart = () => {
  return {
    type: ASYNC_ACTION_START
  };
};

export const asyncActionFinish = () => {
  return {
    type: ASYNC_ACTION_FINISH
  };
};

export const asyncActionError = () => {
  return {
    type: ASYNC_ACTION_ERROR
  };
};

export const asyncOnLoadStart = () => {
  return {
    type: ASYNC_ONLOAD_START
  };
};

export const asyncOnLoadFinish = () => {
  return {
    type: ASYNC_ONLOAD_FINISH
  };
};

export const asyncOnLoadError = () => {
  return {
    type: ASYNC_ONLOAD_ERROR
  };
};