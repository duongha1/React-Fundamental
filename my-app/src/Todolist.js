import React, { useState } from "react";
import Button from "@material-ui/core/Button";

export default function Todolist() {
	const [todo, setTodo] = useState({ description: "", date: "" });
	const [todos, setTodos] = useState([]);
	const inputChanged = (event) => {
		setTodo({ ...todo, [event.target.name]: event.target.value });
	};

	const addTodo = () => {
		setTodos([...todos, todo]);
		setTodo({ description: "", date: "" });
	};

	const deleteTodo = (itemToRemove) => {
		const newTodos = todos.filter((item) => item !== itemToRemove);
		setTodos(newTodos);
	};

	return (
		<div style={{ marginTop: "50px" }}>
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
			<Button
				style={{ margin: 10 }}
				color="primary"
				variant="outlined"
				onClick={addTodo}
			>
				Add
			</Button>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<table>
					<tbody>
						{todos.map((item, index) => (
							<tr key={index}>
								<td>{item.description}</td>
								<td>{item.date}</td>
								<Button onClick={() => deleteTodo(item)}>Delete</Button>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
