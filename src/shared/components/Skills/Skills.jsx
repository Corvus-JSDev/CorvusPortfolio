import style from "./style.module.css";

export default function SkillsSection() {
	return (
		<div className={style.skillsContainer}>
			<h1 className={style.header_SkillsSection}>Skills</h1>

			<div className={style.techContainer}>
				<div className={style.techStack}>
					<div className={style.techHeader}>
						<h3>&mdash; Tech Stack &mdash;</h3>
					</div>

					<div>
						<div>
							<img src="icons/html_and_css-edited.png" />
							<p>Advanced HTML/CSS</p>
						</div>

						<div>
							<img src="icons/JavaScript.png" />
							<p>JavaScript</p>
						</div>

						<div>
							<img src="icons/react-logo.png" />
							<p>React</p>
						</div>

						<div>
							<img src="icons/tailwind.png" />
							<p>Tailwind</p>
						</div>

						<div>
							<img src="icons/bootstrap-logo.png" />
							<p>Bootstrap</p>
						</div>

						<div>
							<img src="icons/jQuery.png" />
							<p>jQuery</p>
						</div>

						<div>
							<img src="icons/nextjs-logo-edit.png" />
							<p>Next.js</p>
						</div>

						<div>
							<img src="icons/vite.png" />
							<p>Vite</p>
						</div>
					</div>
				</div>

				<div className={style.performanceTech}>
					<div className={style.techHeader}>
						<h3>&mdash; Performance Tech &mdash;</h3>
					</div>

					<div>
						<div>
							<img src="icons/git-logo.png" />
							<p>Git (CLI / GitKraken)</p>
						</div>
						<div>
							<img src="icons/github_logo.png" />
							<p>GitHub</p>
						</div>

						<div>
							<img src="icons/Docker-logo.png" />
							<p>Docker</p>
						</div>

						<div>
							<img src="icons/Linux-Logo.png" />
							<p>Linux CLI</p>
						</div>

						<div>
							<img src="icons/command-line-logo.png" />
							<p>Basic Bash Scripting</p>
						</div>

						<div>
							<img src="icons/Neovim-logo.png" />
							<p>Vim / VS Code</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
