import style from "./style.module.css";

/* inputs:

title

titleID

id

divID

placeholder

type: text (default) or area
*/

export default function UserInput(props) {
	if (props.type === "area") {
		return (
			<div
				id={props.divID}
				className={style.inputContainer}
			>
				{props.title && <h2>{props.title}</h2>}

				<textarea
					id={props.id}
					placeholder={props.placeholder || " "}
				></textarea>
			</div>
		);
	}

	return (
		<div
			id={props.divID}
			className={style.inputContainer}
		>
			{props.title && <h3 id={props.titleID}>{props.title}</h3>}
			<input
				type="text"
				id={props.inputID}
				placeholder={props.placeholder || " "}
			/>
		</div>
	);
}
