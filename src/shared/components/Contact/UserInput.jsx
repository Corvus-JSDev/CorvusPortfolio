import style from "./style.module.css";

/* inputs:

title

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
				{props.title && <h3>{props.title}</h3>}

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
			{props.title && <h3>{props.title}</h3>}
			<input
				type="text"
				placeholder={props.placeholder || " "}
			/>
		</div>
	);
}
