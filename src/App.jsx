import "./App.css";
import NavBar from "@sharedComps/Nav-Bar/Nav-Bar.jsx";
import HeroSection from "./shared/components/Hero/hero.jsx";
import ReadyToWork from "./shared/components/Ready-To-Work/ReadyToWork.jsx";
import ProjectsSection from "./shared/components/Projects-Section/projects.jsx";

function App() {
	return (
		<>
			<NavBar />
			<HeroSection />
			<ReadyToWork />
			<ProjectsSection />
		</>
	);
}

export default App;
