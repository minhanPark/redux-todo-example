import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
//window.devToolsExtension && window.devToolsExtension()

const store = createStore(
  reducer,
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
