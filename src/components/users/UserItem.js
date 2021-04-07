import React from "react";
import PropTypes from "prop-types";
import "./UserItem.css";
import { Link } from "react-router-dom";

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
	return (
		<div className="useritem">
			<img src={avatar_url} alt="profile" className="profile-img" />
			<h3>{login}</h3>

			<div>
				<Link to={`/user/${login}`}>More</Link>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;
