import axios from "axios";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "./AsyncAction";
import { SemanticToastContainer, toast } from "react-semantic-toasts";
import "react-semantic-toasts/styles/react-semantic-alert.css";

const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://survey-api-lumen.herokuapp.com";

export const registerUser = data => {
  return dispatch => {
    dispatch(asyncActionStart());
    return axios
      .post(`${BASE_URL}/register`, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        toast({
          type: "success",
          title: "Sukses!",
          description: "Registrasi Berhasil",
          animation: "bounce",
          time: 5000
        });
        setTimeout(() => {
          window.location.replace("/");
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
