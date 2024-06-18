import style from "./style.module.css";
/* 
* props needed:
thumbnail: this is the first img the user will see before the overlay

techUsed[1-9]: this is where the src link to the icon goes

category: is 1-3 words about what the thing is

title: obv the title

desc: again obv
*/
export default function ProjectContainer(props) {
	return (
		<div className={style.overallContainer}>
			<div className={style.mainThumbnail}>
				<img src={props.thumbnail} />
			</div>

			<div className={style.thumbnailOverlay}>
				<div className={style.techUsed}>
					{/* take in different icons imgs */}
					{props.techUsed1 && (
						<img src={`icons/${props.techUsed1}`} />
					)}
					{props.techUsed2 && (
						<img src={`icons/${props.techUsed2}`} />
					)}
					{props.techUsed3 && (
						<img src={`icons/${props.techUsed3}`} />
					)}
					{props.techUsed4 && (
						<img src={`icons/${props.techUsed4}`} />
					)}
					{props.techUsed5 && (
						<img src={`icons/${props.techUsed5}`} />
					)}
					{props.techUsed6 && (
						<img src={`icons/${props.techUsed6}`} />
					)}
					{props.techUsed7 && (
						<img src={`icons/${props.techUsed7}`} />
					)}
					{props.techUsed8 && (
						<img src={`icons/${props.techUsed8}`} />
					)}
					{props.techUsed9 && (
						<img src={`icons/${props.techUsed9}`} />
					)}
				</div>

				<div className={style.infoSection}>
					<code className={style.category}>
						{props.category}
					</code>
					<h1 className={style.title}>{props.title}</h1>

					<p className={style.desc}>{props.desc}</p>
				</div>

				<img
					className={style.externalLink}
					src="icons/external-link.png"
				/>
			</div>
		</div>
	);
}
