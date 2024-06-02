import axios from "axios";
const authData = JSON.parse(localStorage.getItem("auth"));

// create Axios instance
const axiosConfig = axios.create({
  baseURL: "https://menemarket-8699a792d090.herokuapp.com/api",
});

// Add a request interceptor
axiosConfig.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${
      authData ? authData.token : ""
    }`;
    return config;
  },
  (error) => {
    console.log("errorbek", error);
    return Promise.reject(error);
  }
);

export default axiosConfig;
