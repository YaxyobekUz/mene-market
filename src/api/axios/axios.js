import axios from "axios";

// set base url
axios.defaults.baseURL = "https://mnmarket.azurewebsites.net/api";

// axios.interceptors.request.use((config) => {
//   config.headers.Accept = "application/json, text/plain";
//   config.headers["Content-Type"] = "application/json";
//   return config;
// });

// export axios
export default axios;
