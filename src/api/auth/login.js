import axios from "../axios/axios";
import { toast } from "react-toastify";

export const logIn = (userData, saveDataToLocalStorage) => {
  return axios
    .post("/Accaunt/Login", userData)
    .then((response) => {
      // set user data to localstorage
      if (saveDataToLocalStorage) {
        const token = response.data.token;
        localStorage.setItem(
          "user",
          JSON.stringify({
            token: token,
            ...JSON.parse(response.config.data),
          })
        );
      }
      return response;
    })
    .catch((error) => {
      // error notification
      const isOnline = navigator.onLine;
      if (isOnline) {
        toast.error("E-pochta yoki parol noto'g'ri");
      } else {
        toast.error("Internet aloqasi mavjud emas!");
      }
      throw error;
    });
};
