import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

export default class Navbar extends Component {
	static defaultProps = {
		title: "GitHub Finder",
		icon: "fab fa-github"
	};

	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired
	};
	render() {
		return (
			<nav>
				<h1>
					<i className={this.props.icon}></i>
					{this.props.title}
				</h1>
			</nav>
		);
	}
}
