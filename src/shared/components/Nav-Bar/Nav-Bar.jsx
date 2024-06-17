import style from "./style.module.css";

export default function NavBar() {
	return (
		<nav className={style.navBar_container}>
			<a href="#">
				<span>01.</span> Projects
			</a>
			<a href="#">
				<span>02.</span> whoami
			</a>
			<a
				href="#"
				className="pr-10"
			>
				<span>03.</span> GitHub
			</a>
			<a href="#">Contact</a>
		</nav>
	);
}
