import React from "react";

import Link from "next/link";

function ScreenSaverExercise() {
	const COLORS = ["hotpink", "peachpuff", "mediumpurple", "orange"];
	return (
		<main className="screen-saver-wrapper">
			<ul>
				{COLORS.map((color, index) => (
					<li key={index}>
						<Link href={`/exercises/01-screensaver/${color}`}>{color}</Link>
					</li>
				))}
			</ul>
		</main>
	);
}

export default ScreenSaverExercise;
