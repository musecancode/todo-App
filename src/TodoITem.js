import React, { useState } from "react";
export default function TodoItem({ todo, toggleDone, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    if (newText.trim()) {
      updateTodo(todo.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-item ${todo.isDone ? "completed" : ""}`}>
      {isEditing ? (
        <div className="todo-item-edit">
          <input
            className="edit-input"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button className="btn btn-save" onClick={handleUpdate}>
            Save
          </button>
          <button
            className="btn btn-cancel"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="todo-item-content">
          <span className={`todo-text ${todo.isDone ? "completed" : ""}`}>
            {todo.text}
          </span>
          <div className="todo-actions">
            <button
              className={`btn-toggle ${todo.isDone ? "active" : "inactive"}`}
              onClick={() => toggleDone(todo.id)}
            >
              {todo.isDone ? "↩" : "✓"}
            </button>
            <button
              className="btn btn-ghost btn-edit"
              onClick={() => setIsEditing(true)}
            >
              ✎
            </button>
            <button
              className="btn btn-ghost btn-delete"
              onClick={() => deleteTodo(todo.id)}
            >
              🗑
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
