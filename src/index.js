import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";
import { Provider } from "./StoreContext";

let rerenderEntireTree = (state) => {

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
});

reportWebVitals();
