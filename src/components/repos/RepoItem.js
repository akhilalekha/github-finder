import React from "react";
import PropTypes from "prop-types";
import "./RepoItem.css";

const RepoItem = ({ repo }) => {
	return (
		<div className="repo-list">
			<h3>
				<a href={repo.html_url}>{repo.name}</a>
			</h3>
		</div>
	);
};

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired
};

export default RepoItem;
