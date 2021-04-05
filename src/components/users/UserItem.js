import React, { Component } from "react";
import "./UserItem.css";

export class UserItem extends Component {
	render() {
		const { avatar_url, login, html_url } = this.props.user;
		return (
			<div className="useritem">
				<img src={avatar_url} alt="profile" className="profile-img" />
				<h3>{login}</h3>

				<div>
					<a href={html_url}>More</a>
				</div>
			</div>
		);
	}
}

export default UserItem;
