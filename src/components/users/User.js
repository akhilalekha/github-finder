import React, { Component, Fragment } from "react";
import "./User.css";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

export class User extends Component {
	componentDidMount() {
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
			hireable
		} = this.props.user;
		const { loading } = this.props;
		if (loading) return <Spinner />;
		return (
			<div className="user-details">
				<Link to="/" className="back-btn">
					Back to Search
				</Link>
				Hireable:{" "}
				{hireable ? (
					<i className="fas fa-check green"></i>
				) : (
					<i className="fas fa-times-circle red"></i>
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
				</div>
			</div>
		);
	}
}

export default User;
