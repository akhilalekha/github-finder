import React, { Fragment } from "react";

const styles = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	margin: "1rem"
};

const About = () => {
	return (
		<Fragment>
			<div style={styles}>
				<h1>About This App</h1>
				<p>App to search Github users</p>
				<p>Version: 1.0.0</p>
			</div>
		</Fragment>
	);
};

export default About;
