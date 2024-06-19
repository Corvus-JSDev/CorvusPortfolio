import "./App.css";
import NavBar from "@sharedComps/Nav-Bar/Nav-Bar.jsx";
import HeroSection from "./shared/components/Hero/hero.jsx";
import ReadyToWork from "./shared/components/Ready-To-Work/ReadyToWork.jsx";
import ProjectsSection from "./shared/components/Projects-Section/projects.jsx";
import SkillsSection from "./shared/components/Skills/Skills.jsx";

function App() {
	return (
		<>
			<NavBar />
			<HeroSection />
			<ReadyToWork />
			<ProjectsSection />
			<SkillsSection />
		</>
	);
}

export default App;
