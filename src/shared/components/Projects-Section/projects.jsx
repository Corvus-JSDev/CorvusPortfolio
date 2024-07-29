import style from "./style.module.css";
import ProjectContainer from "./projectContainer.jsx";

export default function ProjectsSection() {
	return (
		<div className={style.centerDiv}>
			<div className={style.projectContainer}>
				<h1 className={style.header_ProjectSection}>Projects</h1>
				<code
					title="No, not me! The project cards"
					style={{ marginTop: "30px" }}
				>
					[Hover]
				</code>

				<div className={style.mainProject}>
					<ProjectContainer
						live={true}
						thumbnail="/project-thumbnails/JourneyLens-thumbnail.jpg"
						techUsed1="nextjs-logo-edit.png"
						techUsed2="mongodb-logo.png"
						techUsed3="express-js-icon-edit.png"
						techUsed4="react-logo.png"
						techUsed5="node-js-logo-edited.png"
						techUsed6="tailwind.png"
						techUsed7="Docker-logo.png"
						category="Travel Social Media"
						code="https://github.com/Corvus-JSDev/JourneyLens"
						liveView="https://journeylensapp.netlify.app/"
						title="JourneyLens"
						desc="I created this full-stack app which allows users to showcase their global travels by logging in, accessing their profiles, and creating posts to share their vacation experiences with friends."
					/>
				</div>

				<div className={style.forthProjects}>
					<ProjectContainer
						live={true}
						thumbnail="/project-thumbnails/WiseWealthImg.png"
						techUsed1="vite.png"
						techUsed2="react-logo.png"
						techUsed3="tailwind.png"
						techUsed4="jQuery.png"
						category="Financial Helper / Planner "
						code="https://github.com/Corvus-JSDev/WiseWealth"
						liveView="https://wisewealth-financialaid.netlify.app/"
						title="WiseWealth"
						desc="Like lots of people my age, trying to understand exactly how this complex financial system works can be daunting and tiresome. So I created WiseWealth to teach people if you can afford that new mortgage, what is your actual take home pay, and how much is that new car really going to cost you."
					/>
				</div>

				<div
					id="secondaryProjects"
					className={style.secondaryProjects}
				>
					<ProjectContainer
						live={true}
						thumbnail="/project-thumbnails/AutoMatcher.png"
						techUsed1="vite.png"
						techUsed2="react-logo.png"
						techUsed3="tailwind.png"
						techUsed4="jQuery.png"
						category="Car model comparison tool"
						title="AutoMatcher"
						liveView="https://automatcher.netlify.app/"
						code="https://github.com/Corvus-JSDev/AutoMatcher"
						desc="I was in the market for a new car when I quickly realized that checking five different sites in order to comb through thousands of different models was going to take forever. So I created AutoMatcher, it pulls car data from an API in order to make it easy for the user to compare the specs of different makes and models."
					/>
				</div>

				<div className={style.thirdProjects}>
					<div className={style.thirdChild1}>
						<ProjectContainer
							live={false}
							thumbnail="../project-thumbnails/ByteCreations.webp"
							techUsed1="vite.png"
							techUsed2="react-logo.png"
							techUsed3="jQuery.png"
							techUsed4="node-js-logo-edited.png"
							techUsed5="bootstrap-logo.png"
							techUsed6="tailwind.png"
							techUsed7="Docker-logo.png"
							category="Pet Projects"
							code="https://github.com/Corvus-JSDev/ByteCreations"
							title="ByteCreations"
							desc="These are the bits and bobs I've created. It contains a plethora of big and small UI components from 3D login screens, to fancy buttons."
						/>
					</div>

					<div className={style.thirdChild2}>
						<ProjectContainer
							live={false}
							thumbnail="../project-thumbnails/Sitemockup.webp"
							techUsed1="nextjs-logo-edit.png"
							techUsed2="vite.png"
							techUsed3="react-logo.png"
							techUsed4="tailwind.png"
							techUsed5="node-js-logo-edited.png"
							techUsed6="jQuery.png"
							category="Pet Projects"
							code="https://github.com/Corvus-JSDev/MockUpSites"
							title="Mockup sites"
							desc="Everyone needs to show off their skills somehow, and what better way is there than to create tangible sites to show that. It also helps future partners get a better idea about what they want and how their site can look"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
