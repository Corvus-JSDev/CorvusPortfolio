import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const bodyEL = document.querySelector("body");

setTimeout(() => {
	if (window.scrollY === 0) {
		console.log("scroll hidden");
		console.log(window.scrollY);

		bodyEL.style.overflow = "hidden";
	}
}, 100);

setTimeout(() => {
	bodyEL.style.overflowY = "auto";
}, 11000);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
