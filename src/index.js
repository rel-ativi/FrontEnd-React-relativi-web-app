import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import store from "./store";
import { Tema } from "./styles/tema";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Tema>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Tema>
    </Provider>
  </React.StrictMode>
);
