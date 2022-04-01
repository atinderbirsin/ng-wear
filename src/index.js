import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./components/App";

const rootElement = document.querySelector("#root");

ReactDOMClient.createRoot(rootElement).render(<App />);
// ReactDOM.render(<App />, document.querySelector("#root"));
