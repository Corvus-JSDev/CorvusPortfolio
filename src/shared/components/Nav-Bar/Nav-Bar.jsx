import style from "./style.module.css";
import ContactBtn from "./ContactBtn.jsx";

export default function NavBar() {
	return (
		<nav className={style.navBar_container}>
			<a href="#projects">
				<span>01.</span> Projects
			</a>
			<a href="#whoami">
				<span>02.</span> whoami
			</a>
			<a
				target="_blank"
				href="https://github.com/Corvus-JSDev"
			>
				<span>03.</span> GitHub
			</a>

			<ContactBtn />
		</nav>
	);
}
