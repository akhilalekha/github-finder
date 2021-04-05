import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/Users";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<User />
			</div>
		);
	}
}

export default App;
