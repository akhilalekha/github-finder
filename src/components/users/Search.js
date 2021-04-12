import React, { useState, useContext } from "react";
import "./Search.css";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({ setAlert }) => {
	const githubContext = useContext(GithubContext);

	const [text, setText] = useState("");

	const onChange = e => setText(e.target.value);
	const onSubmit = e => {
		e.preventDefault();
		if (text === "") {
			setAlert("Please enter something...", "light");
		} else {
			githubContext.searchUsers(text);
			setText("");
		}
	};

	return (
		<div className="search">
			<form onSubmit={onSubmit} className="form">
				<input
					type="text"
					name="text"
					placeholder="Search Users..."
					className="search-inp"
					value={text}
					onChange={onChange}
				/>
				<input type="submit" value="Search" className="search-btn" />
			</form>
			{githubContext.users.length > 0 && (
				<button className="clear-btn" onClick={githubContext.clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	setAlert: PropTypes.func.isRequired
};

export default Search;
