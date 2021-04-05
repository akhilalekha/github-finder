import React, { Component } from "react";
import "./UserItem.css";

export class UserItem extends Component {
	state = {
		users: [
			{
				id: "",
				login: "mojombo",
				avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
				html_url: "https://github.com/mojombo"
			},
			{
				login: "defunkt",
				id: 2,
				avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
				url: "https://api.github.com/users/defunkt",
				html_url: "https://github.com/defunkt"
			},
			{
				login: "pjhyett",
				id: 3,
				avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
				url: "https://api.github.com/users/pjhyett",
				html_url: "https://github.com/pjhyett"
			}
		]
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
