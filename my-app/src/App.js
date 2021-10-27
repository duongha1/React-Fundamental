import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Todolist from "./Todolist";

function App() {
	return (
		<BrowserRouter>
			<div style={{ textAlign: "center" }}>
				<Link to="/">Home</Link> <Link to="/todolist">Todolist</Link>{" "}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/todolist" component={Todolist} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
