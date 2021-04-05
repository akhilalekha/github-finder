import React, { Component } from "react";

export default class Users extends Component {
	state = {
		users: [
			{
				id: 1,
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
		return <div></div>;
	}
}
