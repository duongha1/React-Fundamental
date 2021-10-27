import { useState } from "react";
import "./App.css";

function App() {
	const [calculation, setCalculation] = useState({ num1: 0, num2: 0 });
	const [result, setResult] = useState(0);
	const [sum, setSum] = useState(0);

	const formSubmitted = (event) => {
		event.preventDefault();
		if (sum === 1) {
			setResult(calculation.num1 + calculation.num2);
		} else {
			setResult(calculation.num1 - calculation.num2);
		}
	};

	const inputChanged = (event) => {
		setCalculation({
			...calculation,
			[event.target.name]: Number(event.target.value),
		});
	};

	return (
		<div className="App">
			<p>Result = {result}</p>
			<br />
			<form onSubmit={formSubmitted}>
				<input
					placeholder="number 1"
					name="num1"
					value={calculation.num1}
					onChange={inputChanged}
				/>
				<input
					placeholder="number 2"
					name="num2"
					value={calculation.num2}
					onChange={inputChanged}
				/>
				<input type="submit" value="+" onClick={() => setSum(1)} />
				<input type="submit" value="-" onClick={() => setSum(0)} />
			</form>
		</div>
	);
}

export default App;
