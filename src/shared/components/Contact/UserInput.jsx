import style from "./style.module.css";

/* inputs:

title

titleID

id/name

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
					required={props.required}
					name={props.name}
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
				required={props.required}
				type="text"
				name={props.name}
				id={props.inputID}
				placeholder={props.placeholder || " "}
			/>
		</div>
	);
}
