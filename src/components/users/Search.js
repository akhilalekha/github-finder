import React, { Component } from "react";
import "./Search.css";

export class Search extends Component {
	render() {
		return (
			<div className="search">
				<form className="form">
					<input
						type="text"
						name="text"
						placeholder="Search Users..."
						className="search-inp"
					/>
					<input type="submit" value="Search" className="search-btn" />
				</form>
			</div>
		);
	}
}

export default Search;
