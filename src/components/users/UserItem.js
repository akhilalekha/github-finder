import React, { Component } from "react";
import "./UserItem.css";

export class UserItem extends Component {
	constructor() {
		super();
		this.state = {
			id: "",
			login: "mojombo",
			avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
			html_url: "https://github.com/mojombo"
		};
	}
	render() {
		return (
			<div className="useritem">
				<img
					src={this.state.avatar_url}
					alt="profile"
					className="profile-img"
				/>
				<p>{this.state.login}</p>
				<button>More</button>
			</div>
		);
	}
}

export default UserItem;
