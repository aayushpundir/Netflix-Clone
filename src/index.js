import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from './app/store';

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
  <Provider store={store}>
    <App />
  </Provider>
);