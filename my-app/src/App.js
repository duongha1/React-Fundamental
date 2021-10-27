import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://api.github.com/search/repositories?q=react")
			.then((response) => response.json())
			.then((resData) => setUsers(resData.items));
	}, []);

	return (
		<div className="App">
			<h1>Repositories</h1>
			<table>
				<tbody>
					<tr>
						<th>Name</th>
						<th>URL</th>
					</tr>
					{users.map((user, index) => (
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
