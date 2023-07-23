import React from "react";

import "./styles.css";

function HomeLayout({ children }) {
	console.log(ToastProvider);
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}

export default HomeLayout;
