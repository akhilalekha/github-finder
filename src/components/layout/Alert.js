import React from "react";
import "./Alert.css";
const Alert = ({ alert }) => {
	return (
		alert !== null && (
			<div className="alert-text">
				<i className="fas fa-info-circle"></i>
				{alert.msg}
			</div>
		)
	);
};

export default Alert;
