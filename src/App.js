import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";

class App extends Component {
	state = {
		users: [],
		loading: false
	};
	async componentDidMount() {
		this.setState({ loading: true });
		const res = await axios.get("https://api.github.com/users");
		console.log(res.data);
		this.setState({ users: res.data, loading: true });
	}
	render() {
		return (
			<div className="App">
				<Navbar />
				<Users loading={this.state.loading} users={this.state.users} />
			</div>
		);
	}
}

export default App;
