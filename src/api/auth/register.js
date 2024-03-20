import axios from "../axios/axios";
import { toast } from "react-toastify";

export const register = (userData) => {
  return axios
    .post("/Accaunt/Register", userData)
    .then((response) => {
      // success notification
      toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz");
      return response;
    })
    .catch((error) => {
      // error notification
      const isOnline = navigator.onLine;
      if (isOnline) {
        toast.error("Nimadir xato ketdi");
      } else {
        toast.error("Internet aloqasi mavjud emas!");
      }
      throw error;
    });
};
