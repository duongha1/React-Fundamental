import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [question, setQuestion] = useState([]);
	console.log(question);

	const fetchData = () => {
		fetch("https://opentdb.com/api.php?amount=1")
			.then((response) => response.json())
			.then((resData) => setQuestion(resData.results));
	};

	return (
		<div className="App">
			<p>{question[0].question}</p>
			<button type="button" name="question" onClick={fetchData}>
				New Question
			</button>
		</div>
	);
}

export default App;
