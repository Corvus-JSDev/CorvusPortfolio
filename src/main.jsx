import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const bodyEL = document.querySelector("body");
bodyEL.style.overflowY = "auto";

setTimeout(() => {
	if (window.scrollY === 0) {
		bodyEL.style.overflow = "hidden";

		setTimeout(() => {
			bodyEL.style.overflowY = "auto";
		}, 11000);
	}
}, 100);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
