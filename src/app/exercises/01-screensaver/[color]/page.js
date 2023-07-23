import React from "react";
import ScreenSaver from "../../../../components/ScreenSaver";

function ScreenSaverPage({ params }) {
	console.log(params);
	return <ScreenSaver color={params.color} />;
}

export default ScreenSaverPage;
