import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import RootReducer from "./redux/reducers/index";
import Counter from "./Counter";
import "./style.css";

const store = createStore(RootReducer);

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);