import TodoItem from "./TodoITem";
export default function TodoListCard({
  title,
  icon,
  count,
  emptyMessage,
  subText,
  todos,
  toggleDone,
  deleteTodo,
  updateTodo,
}) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <span className="icon-lg">{icon}</span>
          {title}
        </div>
      </div>
      <div className="card-content">
        <div className="todo-list">
          {todos.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">{icon}</div>
              <p>{emptyMessage}</p>
              <p>{subText}</p>
            </div>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleDone={toggleDone}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
