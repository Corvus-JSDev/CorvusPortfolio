import style from "./style.module.css";
/* 
* props needed:
thumbnail: this is the first img the user will see before the overlay

techUsed[1-9]: this is where the src link to the icon goes

category: is 1-3 words about what the thing is

title: obv the title

desc: again obv

live: true or false
is the site live for demo view?

code/liveView
*/

export default function ProjectContainer(props) {
	// shorten description for the preview
	let shortDesc;
	if (props.desc.length > 170) {
		let truncatedDesc = props.desc.substring(0, 170);
		// Check if the 171st character is part of a word
		if (props.desc.charAt(170) !== " " && props.desc.charAt(171) !== " ") {
			// Find the last space within the first 170 characters
			let lastSpaceIndex = truncatedDesc.lastIndexOf(" ");
			if (lastSpaceIndex !== -1) {
				shortDesc = truncatedDesc.substring(0, lastSpaceIndex) + " ...";
			}
		} else {
			shortDesc = truncatedDesc + " ...";
		}
	} else {
		shortDesc = props.desc;
	}

	return (
		<div className={style.overallContainer}>
			<div className={style.mainThumbnail}>
				<img
					className={style.thumbnail}
					src={props.thumbnail}
				/>
			</div>

			<div className={style.thumbnailOverlay}>
				<div className={style.techUsed}>
					{/* take in different icons imgs */}
					{props.techUsed1 && <img src={`icons/${props.techUsed1}`} />}
					{props.techUsed2 && <img src={`icons/${props.techUsed2}`} />}
					{props.techUsed3 && <img src={`icons/${props.techUsed3}`} />}
					{props.techUsed4 && <img src={`icons/${props.techUsed4}`} />}
					{props.techUsed5 && <img src={`icons/${props.techUsed5}`} />}
					{props.techUsed6 && <img src={`icons/${props.techUsed6}`} />}
					{props.techUsed7 && <img src={`icons/${props.techUsed7}`} />}
					{props.techUsed8 && <img src={`icons/${props.techUsed8}`} />}
					{props.techUsed9 && <img src={`icons/${props.techUsed9}`} />}
				</div>

				<div className={style.infoSection}>
					<code className={style.category}>{props.category}</code>
					<h1 className={style.title}>{props.title}</h1>

					<p className={style.desc}>{shortDesc}</p>
				</div>

				<div className={style.buttonContainers}>
					{props.live && (
						<a
							target="_blank"
							href={props.liveView}
							className={style.previewBTN}
						>
							Preview
						</a>
					)}
					<a
						target="_blank"
						href={props.code}
					>
						Source Code
					</a>
				</div>
			</div>
		</div>
	);
}
