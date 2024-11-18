import React, { useState } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Li from "./Li"

//create your first component
const Home = () => {

	
	const [listTodo, setListTodo] = useState( ["Frehas platos", "Tener cosas"])
	const [newTodo, setNewTodo] = useState("")

	return (
		<div className="container">
			<div className="row">
				<div className="col-4" />
				<div className="col-4">
					<h1 className="display-1 text-danger-emphasis mt-5">To Do List...</h1>
					<div className="input-group flex-nowrap">
						<input type="text" className="form-control" placeholder="Write something to do later..."
							value={newTodo}
							onChange={(e) => {
								setNewTodo(e.target.value)
							}}
							onKeyUp={(e) => {
								if (e.key === "Enter" && newTodo.length > 0) {
									setListTodo([...listTodo, newTodo])									
									setNewTodo("")
								}
							}
							}
						/>
					</div>
					<ul className="list-group">
						{
							listTodo.map((value, index) => {
								return <Li key={index} todo={value} />
							})
							
						}
						<li className="list-group-item">
						<span className="fw-light fst-italic" style={{ fontSize: "12px" }}>{listTodo.length} items left</span>
						</li>
					</ul>					
				</div>
				<div className="col-4" />
			</div>
		</div>
	);
};

export default Home;
