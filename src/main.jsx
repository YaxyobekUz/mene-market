import React from "react";
import ReactDOM from "react-dom/client";

// css
import "./index.css";

// routers
import App from "./App.jsx";

// redux
import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
