import React, { useState } from "react";
import "./App.css";

import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import ReactiveButton from "reactive-button";

function App() {
	const [todo, setTodo] = useState({ description: "", date: "", status: "" });
	const [todos, setTodos] = useState([]);
	const [state, setState] = useState("idle");

	const inputChanged = (event) => {
		setTodo({ ...todo, [event.target.name]: event.target.value });
	};

	const addTodo = () => {
		setState("loading");
		setTodos([...todos, todo]);
		setTodo({ description: "", date: "", status: "" });
		setState("success");
	};

	return (
		<div className="App">
			<input
				placeholder="Description"
				name="description"
				value={todo.description}
				onChange={inputChanged}
			/>
			<input
				placeholder="Date"
				name="date"
				value={todo.date}
				onChange={inputChanged}
			/>
			<input
				placeholder="Status"
				name="status"
				value={todo.status}
				onChange={inputChanged}
			/>
			<ReactiveButton
				buttonState={state}
				onClick={addTodo}
				color={"yellow"}
				idleText={"Add"}
				style={{ marginLeft: "10px" }}
				rounded
			/>
			<div
				className="ag-theme-material"
				style={{ height: 600, width: 600, margin: "auto" }}
			>
				<AgGridReact rowData={todos}>
					<AgGridColumn
						field="description"
						sortable={true}
						filter={true}
						suppressMovable={true}
					></AgGridColumn>
					<AgGridColumn
						field="date"
						sortable={true}
						filter={true}
						suppressMovable={true}
					></AgGridColumn>
					<AgGridColumn
						field="status"
						sortable={true}
						filter={true}
						suppressMovable={true}
					></AgGridColumn>
				</AgGridReact>
			</div>
		</div>
	);
}

export default App;
