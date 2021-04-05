import React from "react";
import UserItem from "./UserItem";
import "./Users.css";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div className="users">
				{users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
};

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
};

export default Users;
