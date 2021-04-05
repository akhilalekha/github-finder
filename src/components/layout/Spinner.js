import React, { Fragment } from "react";
import spinner from "./spinner.gif";
import "./Spinner.css";

const Spinner = () => {
	return (
		<Fragment>
			<img src={spinner} alt="spinner loading" />
		</Fragment>
	);
};

export default Spinner;
