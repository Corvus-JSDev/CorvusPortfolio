import TypeWriter from "./typewriter.jsx";
import style from "./style.module.css";
import { useEffect } from "react";

function startWorkBtnShine() {
	const contactAnimationSpeed = 1100;

	// Create the style element and before pseudo-class for the contact button
	const workBeforeClass = document.createElement("style");
	workBeforeClass.innerHTML = `
	#workBtn::before {
	content: "";
	position: absolute;
	top: 0;
	left: -100%;
	width: 100%;
	height: 100%;
	background: linear-gradient(
		45deg,
		transparent,
		var(--gold-color),
		transparent
	);
	opacity: 0.4;

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

export default function HeroSection() {
	useEffect(() => {
		const workButton = document.querySelector("#workBtn");
		workButton.addEventListener("mouseover", () => {
			startWorkBtnShine();
		});

		setTimeout(() => {
			startWorkBtnShine();
		}, 11000);
	});

	return (
		<div className={style.heroContainer}>
			{/* Left information */}
			<section className={style.infoSection}>
				<div className={style.info_margin}>
					<div className={style.header_infoSection}>
						<h3>Hello, Friend</h3>
						<h1>
							Giovanni Squillace
							<div className={style.headerUnderline}></div>
						</h1>
						{/* !!! Underline needed */}
					</div>

					<div className={style.desc_infoSection}>
						<TypeWriter />
						<p>
							I am a software engineer specializing in
							front-end web development, focused on creating an
							marvelous human-centric experience.
						</p>
					</div>

					<button
						id="workBtn"
						className={style.workTogetherBtn}
					>
						Lets work together!
					</button>
					{/* Shine effect needed */}
				</div>
			</section>

			{/* Right LOGO */}
			<section className={style.logoSection}>
				<h1>Crow img</h1>
			</section>
		</div>
	);
}
