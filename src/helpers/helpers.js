import { toast } from "react-toastify";

export const getElement = (e, name) => {
  if (e.target.querySelector(name)) {
    return e.target.querySelector(name);
  } else {
    return e.querySelector(name);
  }
};

export const getElements = (e, name) => {
  if (e.target.querySelectorAll(name)) {
    return e.target.querySelectorAll(name);
  } else {
    return e.querySelector(name);
  }
};

export const checkInputValueByRegex = (input, regex) => {
  if (regex) {
    const status = regex.test(input.value.trim());
    if (status) {
      input.classList.remove("is-invalid");
    } else {
      input.classList.add("is-invalid");
      input.focus();
    }
    return status;
  } else {
    const status = input.value.trim().length > 0;
    if (status) {
      input.classList.remove("is-invalid");
    } else {
      input.classList.add("is-invalid");
      input.focus();
    }
    return status;
  }
};

// notifications
export const successNotification = (message) => {
  if (message) {
    toast.success(message + "!");
  } else {
    toast.success("Muvaffaqiyatli!");
  }
};

export const errorNotification = (message) => {
  if (message) {
    toast.error(message + "!");
  } else {
    toast.error("Xatolik!");
  }
};

errorNotification.offline = (message) => {
  const isOnline = navigator.onLine;
  if (isOnline) {
    toast.error(message ? message + "!" : "Xatolik!");
  } else {
    toast.error("Internet aloqasi mavjud emas!");
  }
};
