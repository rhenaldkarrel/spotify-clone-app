import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import "index.css";
import store from "store/store";
import { Provider } from "react-redux";
import reportWebVitals from "reportWebVitals";
import * as serviceWorker from "serviceWorker";

if (process.env.NODE_ENV === "development") {
	const { worker } = require("mocks/browser");
	worker.start();
}

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
