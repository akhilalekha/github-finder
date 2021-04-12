import React from "react";

const styles = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	margin: "7rem"
};

const NotFound = () => {
	return (
		<div style={styles}>
			<h1>Not Found</h1>
			<p>The page you are looking for does not exist..</p>
		</div>
	);
};

export default NotFound;
