import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
} from "@material-ui/core";
import { Delete, Save } from "@material-ui/icons";

export default function App() {
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
		<div>
			<AppBar position="static">
				<Toolbar variant="dense">
					<Typography variant="h6" color="inherit" component="div">
						Todolist
					</Typography>
				</Toolbar>
			</AppBar>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
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
					<Save style={{ marginRight: "10px" }} />
					Add
				</Button>
			</div>
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
								<IconButton
									size="small"
									color="secondary"
									onClick={() => deleteTodo(item)}
								>
									<Delete />
								</IconButton>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
