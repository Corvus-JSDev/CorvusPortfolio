import style from "./style.module.css";
import ContactBtn from "./ContactBtn.jsx";

export default function NavBar() {
	return (
		<nav className={style.navBar_container}>
			<a href="#">
				<span>01.</span> Projects
			</a>
			<a href="#">
				<span>02.</span> whoami
			</a>
			<a href="#">
				<span>03.</span> GitHub
			</a>

			<ContactBtn />
		</nav>
	);
}
