import Typewriter from "typewriter-effect/dist/core";
import { useEffect } from "react";

export default function TypeWriter() {
	useEffect(() => {
		const typeWriterEffectEL =
			document.querySelector("#typedEffect");
		const TypewriterEff = new Typewriter(typeWriterEffectEL, {
			delay: 90,
			cursor: "|",
		});
		TypewriterEff.pauseFor(4000)
			.typeString("I build things, the cool")
			.pauseFor(400)
			.deleteChars(4)
			.pauseFor(200)
			.typeString("nerdy way. ")
			.pauseFor(2800)
			.changeCursor(" ")
			.start();
	}, []);

	return <h2 id="typedEffect"></h2>;
}
