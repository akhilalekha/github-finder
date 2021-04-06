import "./App.css";
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null
	};

	//search users
	searchUsers = async text => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		// console.log(res.data);
		this.setState({ users: res.data.items, loading: false });
	};

	//clear users from the state
	clearUsers = () => this.setState({ users: [], loading: false });

	//set alert
	setAlert = (msg, type) => {
		this.setState({ alert: { msg, type } });
		setTimeout(() => this.setState({ alert: null }), 3000);
	};

	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					<Alert alert={this.state.alert} />
					<Switch>
						<Route
							exact
							path="/"
							render={props => (
								<Fragment>
									<Search
										searchUsers={this.searchUsers}
										clearUsers={this.clearUsers}
										showClear={this.state.users.length > 0 ? true : false}
										setAlert={this.setAlert}
									/>
								</Fragment>
							)}
						/>
						<Route exact path="/about" component={About} />
					</Switch>

					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</Router>
		);
	}
}

export default App;
