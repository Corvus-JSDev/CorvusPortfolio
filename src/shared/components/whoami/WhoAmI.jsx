/* eslint-disable react/no-unescaped-entities */
import style from "./style.module.css";

export default function WhoAmI() {
	return (
		<div className={style.whoamiContainer}>
			<h1 className={style.header_whoamiSection}>$ whoami</h1>

			<div className={style.textContainer}>
				<p
					style={{
						opacity: "0.8",
						fontWeight: "500",
						marginBottom: "35px",
					}}
				>
					Knowing the person you're hiring has the right skills is crucial,
					but discovering exactly <b>who</b> they are is paramount. What
					drives their mindset? How do they tackle rigorous challenges? And
					hundreds of other questions.
				</p>

				<p>
					So, who exactly is Giovanni? Well, if you're like me and like
					benchmarks, I'm a Choleric (analytical leader) with an INTP
					(Logician) personality.
				</p>
				<p>
					This combination aligns with some of history's most influential
					minds such as <b>Albert Einstein</b>, <b>Nikola Tesla</b>, and{" "}
					<b>Bill Gates</b> — all Choleric INTPs, known for their
					astonishing contributions to humanity. Imagine having that
					caliber of thinking on your team.
				</p>

				<p>
					I am highly goal-oriented, practical, and adept at
					problem-solving. My independence and rationality, is what makes
					me thrive on exploring innovative solutions that go beyond the
					conventional boundaries. I actively seek diverse perspectives and
					will be forever curious — always probing deeper and embracing
					intellectual challenges.
				</p>

				<p>
					With a proven track record in analytical leadership and a
					deep-seated curiosity for solving intricate challenges, I am
					enthusiastic about bringing my skills and perspective to a
					software engineering role. I am eager to contribute to a team
					that values innovation, continuous learning, and the overall
					betterment of humanity.
				</p>
			</div>
		</div>
	);
}
