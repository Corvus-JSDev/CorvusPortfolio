import style from "./style.module.css";

export default function Footer() {
	return (
		<>
			<div className="flex justify-between items-center px-3 py-2 pr-4 mt-5 mb-5 border-t flex-column border-slate-500">
				<p className={style.nameTitle}>Giovanni Squillace</p>

				<div className={style.linkContainer}>
					<a
						target="_blank"
						href="https://github.com/Corvus-JSDev"
						title="GitHub"
					>
						<img src="/icons/github-mark-white-contact-white.png" />
					</a>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/giovanni-squillace-42813a22b/"
						title="Linkedin"
					>
						<img src="/icons/linkedin-black-1687072478-contact-white.png" />
					</a>
					<a
						target="_blank"
						href="https://twitter.com/Corvus_JSDev"
						title="Twitter"
					>
						<img src="/icons/twitter-x-logo-png-9-1207032165-contact-white.png" />
					</a>
				</div>
			</div>
		</>
	);
}
