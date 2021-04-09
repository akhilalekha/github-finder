import "./App.css";
import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";

import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

const App = () => {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(null);

	//search users
	const searchUsers = async text => {
		setLoading(true);

		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		// console.log(res.data);
		setUsers(res.data.items);
		setLoading(false);
	};

	//get single user details
	const getUser = async username => {
		setLoading(true);

		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		setUser(res.data);
		setLoading(false);
	};

	//get user repos
	const getUserRepos = async username => {
		setLoading(true);
		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		// this.setState({ repos: res.data, loading: false });
		setRepos(res.data);
		setLoading(false);
	};

	//clear users from the state
	const clearUsers = () => {
		setUsers([]);
		setLoading(false);
	};

	//set alert
	const showAlert = (msg, type) => {
		setAlert({ msg, type });
		setTimeout(() => setAlert(null), 3000);
	};

	return (
		<Router>
			<div className="App">
				<Navbar />
				<Alert alert={alert} />
				<Switch>
					<Route
						exact
						path="/"
						render={props => (
							<Fragment>
								<Search
									searchUsers={searchUsers}
									clearUsers={clearUsers}
									showClear={users.length > 0 ? true : false}
									setAlert={showAlert}
								/>
								<Users loading={loading} users={users} />
							</Fragment>
						)}
					/>
					<Route path="/about" component={About} />
					<Route
						exact
						path="/user/:login"
						render={props => (
							<User
								{...props}
								getUser={getUser}
								getUserRepos={getUserRepos}
								user={user}
								loading={loading}
								repos={repos}
							/>
						)}
					/>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
