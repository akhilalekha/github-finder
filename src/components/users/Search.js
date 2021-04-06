import React, { Component } from "react";
import "./Search.css";

export class Search extends Component {
	state = {
		text: ""
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });
	onSubmit = e => {
		e.preventDefault();
		this.props.searchUsers(this.state.text);
		this.setState({ text: "" });
	};
	render() {
		return (
			<div className="search">
				<form onSubmit={this.onSubmit} className="form">
					<input
						type="text"
						name="text"
						placeholder="Search Users..."
						className="search-inp"
						value={this.state.text}
						onChange={this.onChange}
					/>
					<input type="submit" value="Search" className="search-btn" />
				</form>
			</div>
		);
	}
}

export default Search;
