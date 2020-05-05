import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import App from "./pages/app";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
