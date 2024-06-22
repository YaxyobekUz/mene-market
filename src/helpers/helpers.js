import { toast } from "react-toastify";

export const getElement = (e, name) => {
  return e.target.querySelector(name);
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

export const search = (data, key, query) => {
  const formattedQuery = query.trim().toLowerCase();

  const filteredData = data.filter((item) => {
    return item[key].toLowerCase().includes(formattedQuery);
  });

  return filteredData;
};

export const checkInputValueByLength = (input, value, length) => {
  if (length) {
    if (value.trim().length > length) {
      input.classList.remove("is-invalid");
      return true;
    } else {
      input.focus();
      input.classList.add("is-invalid");
      return false;
    }
  } else {
    if (value.trim().length > 0) {
      input.classList.remove("is-invalid");
      return true;
    } else {
      input.focus();
      input.classList.add("is-invalid");
      return false;
    }
  }
};

export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const formatInputValueToNumber = (e) => {
  const numbers = e.target.value.replace(/[^\d]/g, "");
  e.target.value = formatNumber(numbers);
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

// format date
export const formatDate = (input) => {
  const date = new Date(input);

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");

  const formattedDate = `${day}.${month}.${year}`;

  return formattedDate;
};

// format time
export const formatTime = (input) => {
  const date = new Date(input);

  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  const formattedTime = `${hours}:${minutes}`;

  return formattedTime;
};

export const calculateProductRatingByReviews = (reviews) => {
  if (reviews && reviews.length > 0) {
    const rating =
      reviews.reduce((acc, curr) => acc + Number(curr.status), 0) /
      reviews.length;

    return rating !== NaN ? rating.toFixed(1) : 5;
  } else {
    return 5;
  }
};

// flow page
export const offerLinkClientsStatistics = (clients) => {
  if (clients.length > 0) {
    const statusCount = {};
    clients.forEach((client) => {
      const status = client.statusType;
      statusCount[`status ${status}`] =
        (statusCount[`status ${status}`] || 0) + 1;
    });
    return statusCount;
  } else {
    return 0;
  }
};
