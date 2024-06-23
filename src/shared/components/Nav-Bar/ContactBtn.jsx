import { useEffect } from "react";
import style from "./style.module.css";

function startContactBtnShine() {
	const contactAnimationSpeed = 600;

	// Create the style element and before pseudo-class for the contact button
	const ContactBeforeClass = document.createElement("style");
	ContactBeforeClass.innerHTML = `
	#contact-btn::before {
	content: "";
	position: absolute;
	top: 0;
	left: -100%;
	width: 100%;
	height: 100%;
	background: linear-gradient(
		120deg,
		transparent,
		var(--gold-color),
		transparent
	);
	opacity: 0.35;

	animation: shineAnimation ${String(contactAnimationSpeed)}ms forwards;
	animation-play-state: running;
	}`;

	// add the class to the dom
	document.head.appendChild(ContactBeforeClass);

	// remove the pseudo-class in order to replay the animation
	setTimeout(() => {
		ContactBeforeClass.remove();
	}, contactAnimationSpeed + 10);
}

export default function ContactBtn() {
	useEffect(() => {
		const contactButton = document.querySelector("#contact-btn");

		contactButton.addEventListener("mouseover", () => {
			startContactBtnShine();
		});
	}, []);

	return (
		<a
			href="#contact"
			id="contact-btn"
			className={style.contact_navbar}
		>
			Contact
		</a>
	);
}
