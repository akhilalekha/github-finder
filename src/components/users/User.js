import React, { Component, Fragment } from "react";
import "./User.css";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

export class User extends Component {
	componentDidMount() {
		// console.log("inside component mount");
		this.props.getUser(this.props.match.params.login);
	}

	static propTypes = {
		loading: PropTypes.bool,
		user: PropTypes.object.isRequired,
		getUser: PropTypes.func.isRequired
	};
	render() {
		const {
			name,
			avatar_url,
			location,
			bio,
			blog,
			login,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hireable,
			company
		} = this.props.user;
		// console.log("props inside user details is", this.props);
		const { loading } = this.props;
		// console.log("inside user details: user", this.props.user);
		// console.log("inside user details: hireable", hireable);
		if (loading) return <Spinner />;
		return (
			<div className="user-details">
				<Link to="/" className="back-btn">
					Back to Search
				</Link>
				Hireable:{" "}
				{hireable ? (
					<span key="green">
						<i className="fas fa-check green"></i>
					</span>
				) : (
					<span key="red">
						<i className="fas fa-times-circle red"></i>
					</span>
				)}
				<div className="card">
					<div>
						<img src={avatar_url} className="user-img" alt="user" />
					</div>
					<h1>{name}</h1>
					<p>Location: {location}</p>
					<div>
						{bio && (
							<Fragment>
								<h3>Bio</h3>
								<p>{bio}</p>
							</Fragment>
						)}
					</div>
					<a href={html_url} className="github_url">
						Visit GitHub Profile
					</a>
					<ul>
						<li>
							{login && (
								<Fragment>
									<strong>Username: </strong>
									{login}
								</Fragment>
							)}
						</li>
						<li>
							{company && (
								<Fragment>
									<strong>Company: </strong>
									{company}
								</Fragment>
							)}
						</li>
						<li>
							{blog && (
								<Fragment>
									<strong>Website: </strong>
									{blog}
								</Fragment>
							)}
						</li>
					</ul>
					<div className="labels">
						<div className="badge">Followers: {followers}</div>
						<div className="badge">Following: {following}</div>
						<div className="badge">Public Repos: {public_repos}</div>
						<div className="badge">Public Gists: {public_gists}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default User;
