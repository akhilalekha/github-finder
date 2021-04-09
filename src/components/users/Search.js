import React, { useState, useContext } from "react";
import "./Search.css";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({ showClear, clearUsers, setAlert }) => {
	const githubContext = useContext(GithubContext);

	const [text, setText] = useState("");

	const onChange = e => setText(e.target.value);
	const onSubmit = e => {
		e.preventDefault();
		if (text === "") {
			setAlert("Please enter something...", "light");
		} else {
			console.log("gittt ==>>", githubContext);
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
			{showClear && (
				<button className="clear-btn" onClick={clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired
};

export default Search;
