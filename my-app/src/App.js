import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import AddBook from "./AddBook";

export default function App() {
	const [bookList, setBookList] = useState([]);
	useEffect(() => {
		fetchItems();
	}, []);
	console.log(bookList);

	const fetchItems = () => {
		fetch("https://bookstore-e74ea-default-rtdb.firebaseio.com/.json")
			.then((response) => response.json())
			.then((resData) => {
				addKeys(resData);
			});
	};

	const addKeys = (data) => {
		const keys = Object.keys(data.books);
		const valueKeys = Object.values(data.books).map((item, index) =>
			Object.defineProperty(item, "id", { value: keys[index] })
		);
		setBookList(valueKeys);
	};

	const addBook = (newBook) => {
		fetch("https://bookstore-e74ea-default-rtdb.firebaseio.com/books/.json", {
			method: "POST",
			body: JSON.stringify(newBook),
		})
			.then((response) => fetchItems())
			.catch((err) => console.error(err));
	};

	const deleteBook = (id) => {
		console.log("id", id);
		fetch(
			`https://bookstore-e74ea-default-rtdb.firebaseio.com/books/${id}.json`,
			{
				method: "DELETE",
			}
		)
			.then((response) => fetchItems())
			.catch((err) => console.error(err));
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
				<AddBook addBook={addBook} />
			</div>
			<div
				className="ag-theme-material"
				style={{ height: 400, width: 1000, margin: "auto" }}
			>
				<AgGridReact rowData={bookList}>
					<AgGridColumn sortable={true} filter={true} field="title" />
					<AgGridColumn sortable={true} filter={true} field="author" />
					<AgGridColumn sortable={true} filter={true} field="year" />
					<AgGridColumn sortable={true} filter={true} field="isbn" />
					<AgGridColumn sortable={true} filter={true} field="price" />
					<AgGridColumn
						headerName=""
						field="id"
						width={90}
						cellRendererFramework={(params) => (
							<IconButton
								size="small"
								color="secondary"
								onClick={() => deleteBook(params.value)}
							>
								<Delete />
							</IconButton>
						)}
					/>
				</AgGridReact>
			</div>
		</div>
	);
}
