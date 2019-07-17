import axios from "axios";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
  asyncOnLoadStart,
  asyncOnLoadError,
  asyncOnLoadFinish
} from "./AsyncAction";
import { GET_QUESTION } from "./types";
import { SemanticToastContainer, toast } from "react-semantic-toasts";
import "react-semantic-toasts/styles/react-semantic-alert.css";

const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://survey-api-lumen.herokuapp.com";

export const getQuestion = () => async dispatch => {
  try {
    let url = `${BASE_URL}/api/v1/questions`;

    dispatch(asyncOnLoadStart());
    const res = await axios.get(`${url}`);

    dispatch({
      type: GET_QUESTION,
      payload: res.data
    });
    dispatch(asyncOnLoadFinish());
  } catch (error) {
    dispatch(asyncOnLoadError());
  }
};

export const addQuestion = data => {
  return dispatch => {
    dispatch(asyncActionStart());
    return axios
      .post(`${BASE_URL}/api/v1/questions`, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        toast({
          type: "success",
          title: "Sukses!",
          description: "Data Berhasil ditambahkan",
          animation: "bounce",
          time: 5000
        });
        setTimeout(() => {
          window.location.replace("/masterquestionnaire");
        }, 1000);
        dispatch(asyncActionFinish());
      })
      .catch(err => {
        dispatch(asyncActionError());
        toast({
          type: "error",
          title: "Terjadi Kesalahan!!!",
          description: "Telah Terjadi Kesalahan silahkan coba lagi",
          animation: "bounce",
          time: 5000
        });

        console.log(err);
      });
  };
};
