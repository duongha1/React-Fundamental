import React, { useState } from "react";
import "./App.css";

function App() {
	const [users, setUsers] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const submitChange = () => {
		fetch(`https://api.github.com/search/repositories?q=${searchTerm}`)
			.then((response) => response.json())
			.then((resData) => setUsers(resData.items));
	};

	const inputchange = (event) => {
		setSearchTerm(event.target.value);
	};
	return (
		<div className="App">
			<h1>Repositories</h1>
			<input placeholder="search" value={searchTerm} onChange={inputchange} />
			<input type="submit" value="Search" onClick={submitChange} />
			<table>
				<tbody>
					<tr>
						<th>Name</th>
						<th>URL</th>
					</tr>
					{users?.map((user, index) => (
						<tr key={index}>
							<td>{user.full_name}</td>
							<td>
								<a href={user.html_url}>{user.html_url}</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
