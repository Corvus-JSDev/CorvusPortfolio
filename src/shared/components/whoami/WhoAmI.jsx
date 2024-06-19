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
					Knowing the person you're hiring has the skills is
					great and all, but what you're really here to find is
					who they are. What's their mindset? How do they respond
					to rigorous challenges? And hundreds of other
					questions.
				</p>

				<p>
					So, who is Giovanni? Well, if you want benchmarks, I'm
					a Choleric (analytical leader) with an INTP (Logician)
					personality.
				</p>
				<p>
					Some of the most extraordinary and influential people
					in the world are also Choleric INTPs, people like:{" "}
					<b>Albert Einstein</b>, <b>Nikola Tesla</b>, and{" "}
					<b>Bill Gates</b>, are just a few examples. Who
					wouldn't want one of them on their team?
				</p>
				<p>
					I'm extremely goal-oriented, practical, and a great
					problem solver. People like me are known to be
					independent and rational thinkers that you can always
					count on to think outside the box to solve the hardest
					problems. I have an open mind that loves to hear other
					people's ideas and trains of thought. I'm always asking
					why, and always Curious to the point where, if I were a
					cat, I'd be dead decades ago. Not only that, but I
					constantly crave intellectual stimulation, the pursuit
					of new ideas, and opportunities to solve the most
					challenging puzzles. I have a Sherlock Holmes-like
					ability to wrap my brain around whatever complex
					problems are placed in front of me.
				</p>
			</div>
		</div>
	);
}
