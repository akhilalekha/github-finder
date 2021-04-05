import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = ({ icon, title }) => {
	return (
		<nav>
			<h1>
				<i className={icon}></i>
				{title}
			</h1>
		</nav>
	);
};

Navbar.defaultProps = {
	title: "GitHub Finder",
	icon: "fab fa-github"
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default Navbar;
