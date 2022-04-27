import "../TodoItem/todo.css"

const TodoItem = ({ children, id, isCompleted, deletedFunction, handleCompleted }) => {
	return (
		<li className="item" id={id}>
			<strong className={isCompleted ? "completed" : ""}>{children}</strong>
			<input
				checked={isCompleted} data-todo-id={id} type='checkbox' onChange={handleCompleted}
			/>
			<button className="btn" onClick={deletedFunction} data-todo-id={id}>
				Delete
			</button>
		</li>
	);
};

export default TodoItem;
