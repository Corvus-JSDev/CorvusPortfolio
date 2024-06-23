import "./App.css";
import NavBar from "@sharedComps/Nav-Bar/Nav-Bar.jsx";
import HeroSection from "./shared/components/Hero/hero.jsx";
import ReadyToWork from "./shared/components/Ready-To-Work/ReadyToWork.jsx";
import ProjectsSection from "./shared/components/Projects-Section/projects.jsx";
import SkillsSection from "./shared/components/Skills/Skills.jsx";
import WhoAmI from "./shared/components/whoami/WhoAmI.jsx";
import Contact from "./shared/components/Contact/Contact.jsx";
import Footer from "./shared/components/Footer/Footer.jsx";

function App() {
	return (
		<>
			<a id="top"></a>
			<div className="goldOutline">
				<h1>Giovanni Squillace</h1>
				<div className="birdLogoContainer">
					<img src="/imgs/birds/simple-stroke-crow-outline.png" />
				</div>
				<h1>Web Developer</h1>
			</div>
			<NavBar />
			<HeroSection />
			<ReadyToWork />
			<a id="projects"></a>
			<ProjectsSection />
			<SkillsSection />
			<a id="whoami"></a>
			<WhoAmI />
			<a id="contact"></a>
			<Contact />
			<Footer />
		</>
	);
}

export default App;
