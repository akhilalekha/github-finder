import React, { Component } from "react";
import "./UserItem.css";

export class UserItem extends Component {
	state = {
		id: "",
		login: "mojombo",
		avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
		html_url: "https://github.com/mojombo"
	};
	render() {
		const { avatar_url, login, html_url } = this.state;
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
