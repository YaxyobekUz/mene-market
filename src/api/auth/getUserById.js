import axios from "../axios/axios";
import { toast } from "react-toastify";

export const getUserById = (userData) => {
  return axios
    .get("/User/ById?id=" + userData.id, {
      headers: {
        Authorization: "Bearer " + userData.token,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      // error notification
      const isOnline = navigator.onLine;
      if (!isOnline) {
        toast.error("Internet aloqasi mavjud emas!");
      }
      throw error;
    });
};
