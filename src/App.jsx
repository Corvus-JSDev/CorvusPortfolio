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
			<div className="goldOutline"></div>
			<NavBar />
			<HeroSection />
			<ReadyToWork />
			<ProjectsSection />
			<SkillsSection />
			<WhoAmI />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
