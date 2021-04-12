import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";

import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className="App">
						<Navbar />
						<Alert />
						<Switch>
							<Route
								exact
								path="/"
								render={props => (
									<Fragment>
										<Search />
										<Users />
									</Fragment>
								)}
							/>
							<Route path="/about" component={About} />
							<Route exact path="/user/:login" component={User} />
						</Switch>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
