import React, { useState } from "react";
import TodoItem from "./Components/TodoItem/TodoItem";
import "./Components/Assets/main.css";



function App() {

  const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem("todos")) || []);

  console.log(todos);


  function handleCreateTodo(evt) {
    const newTodo = {
      id: todos[todos.length - 1]?.id + 1 || 0,
      title: evt.target.value,
      isCompleted: false
    }
    if (evt.code === "Enter") {
      evt.target.value = null;
      window.localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
      return setTodos([...todos, newTodo])
    }
  }

  

  function handleDeleteTodo(evt) {
    const deletedTodoId = evt.target.dataset.todoId - 0
    const filterArray = todos.filter(item => item.id !== deletedTodoId)
    window.localStorage.setItem("todos", JSON.stringify(filterArray));
    return setTodos(filterArray)
  }

  function handleCompleted(evt) {
    const completedId = evt.target.dataset.todoId - 0
    const findedItem = todos.find(item => item.id === completedId)
    findedItem.isCompleted = !findedItem.isCompleted
    return setTodos([...todos]);

  }

  return (
		<div>
			<input
				className='input'
				onKeyUp={handleCreateTodo}
				type='text'
				placeholder='todo...'
			/>
			<ul className='list'>
				{todos?.map((item) => (
					<TodoItem
						key={item.id}
						handleCompleted={handleCompleted}
						deletedFunction={handleDeleteTodo}
						isCompleted={item.isCompleted}
						id={item.id}
						props={item}>
						{item.title}
					</TodoItem>
				))}
			</ul>
		</div>
	);
}

export default App;
