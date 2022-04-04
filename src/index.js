import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./components/App";
import { compose, createStore } from "redux";
import reducer from "./components/reducer";
import { Provider } from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());

const rootElement = document.querySelector("#root");

ReactDOMClient.createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
// ReactDOM.render(<App />, document.querySelector("#root"));
