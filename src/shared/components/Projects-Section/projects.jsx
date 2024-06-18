import style from "./style.module.css";
import ProjectContainer from "./projectContainer.jsx";

export default function ProjectsSection() {
	return (
		<div className={style.projectContainer}>
			<h1 className={style.header_ProjectSection}>Projects</h1>
			<code
				style={{
					backgroundColor: "rgba(84, 29, 115, 0.5)",
					padding: "1px 4px",
					borderRadius: "5px",
					fontSize: "0.7rem",
					marginTop: "5px",
				}}
			>
				[Hover]
			</code>

			<div className={style.mainProject}>
				<ProjectContainer
					thumbnail="FillerImg.png"
					techUsed1="mongodb-logo.png"
					techUsed2="express-js-icon-edit.png"
					techUsed3="react-logo.png"
					techUsed4="node-js-logo-edited.png"
					techUsed5="nextjs-logo-edit.png"
					techUsed6="tailwind.png"
					category="Travel Social Media"
					title="JourneyLens"
					desc="I created this full-stack app which allows users to showcase their global travels by logging in, accessing their profiles, and creating posts to share their vacation experiences with friends."
				/>
			</div>

			<div className={style.secondaryProjects}></div>

			<div className={style.thirdProjects}></div>
		</div>
	);
}
