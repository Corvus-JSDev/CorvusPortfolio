import { useEffect } from "react";
import style from "./style.module.css";
import UserInput from "./UserInput.jsx";

function startSubmitBtnShine() {
	const contactAnimationSpeed = 700;

	// Create the style element and before pseudo-class for the contact button
	const workBeforeClass = document.createElement("style");
	workBeforeClass.innerHTML = `
	#submitBtn::before {
	content: "";
	position: absolute;
	top: 0;
	left: -100%;
	width: 100%;
	height: 100%;
	background: linear-gradient(
		60deg,
		transparent,
		var(--gold-color),
		transparent
	);

	opacity: 0.35;

	animation: shineAnimation ${String(contactAnimationSpeed)}ms forwards;
	animation-play-state: running;
	}`;

	// add the class to the dom
	document.head.appendChild(workBeforeClass);

	// remove the pseudo-class in order to replay the animation
	setTimeout(() => {
		workBeforeClass.remove();
	}, contactAnimationSpeed + 10);
}

export default function Contact() {
	useEffect(() => {
		const submitBtn = document.querySelector("#submitBtn");

		submitBtn.addEventListener("mouseover", () => {
			startSubmitBtnShine();
		});
	});

	return (
		<div className={style.contactContainer}>
			<h1 className={style.header_ContactSection}>
				Lets work together
			</h1>
			<p>
				Alternatively, you can reach me at:
				<br />
				<b>Giovanni.Squillace.Work@gmail.com</b>
			</p>

			<div className={style.contactPage}>
				<UserInput
					id="nameInput"
					title="Name / Organization"
				/>

				<UserInput
					id="emailInput"
					title="Your Email"
				/>

				<UserInput
					id="subjectInput"
					title="Subject"
				/>

				<hr style={{ border: "none", marginTop: "40px" }} />

				<UserInput
					type="area"
					id="messageInput"
					title="Message"
				/>

				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<button id="submitBtn">Submit</button>
				</div>
			</div>
		</div>
	);
}
