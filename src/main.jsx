import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//* Removes the ability to scroll for 5 seconds if the user is at the top of the page
/*
const bodyEL = document.querySelector("body");
setTimeout(() => {
	if (window.scrollY === 0) {
		bodyEL.style.overflowY = "hidden";
	}
}, 100);
setTimeout(() => {
	bodyEL.style.overflowY = "auto";
}, 5000);
*/

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
