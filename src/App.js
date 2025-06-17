import React, { useState } from "react";
import "./index.css";
import TodoForm from "./TodoForm";
import TodoListCard from "./TodoListCard";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const activeTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);

  return (
    <div className="todo-app">
      <div className="todo-container">
        <div className="header">
          <h1>My To-Do List</h1>
          <p>Stay organized and get things done</p>
        </div>

        <div className="card">
          <div className="card-content">
            <TodoForm addTodo={addTodo} />
          </div>
        </div>

        <div className="stats">
          <div className="badge badge-secondary">
            Pending: {activeTodos.length}
          </div>
          <div className="badge badge-success">
            Completed: {completedTodos.length}
          </div>
        </div>

        <div className="todo-grid">
          <TodoListCard
            title="To Do"
            icon="○"
            count={activeTodos.length}
            emptyMessage="No active tasks"
            subText="Add a task to get started!"
            todos={activeTodos}
            toggleDone={toggleDone}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
          <TodoListCard
            title="Completed"
            icon="✔"
            count={completedTodos.length}
            emptyMessage="No completed tasks"
            subText="Complete a task to see it here!"
            todos={completedTodos}
            toggleDone={toggleDone}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        </div>
      </div>
    </div>
  );
}
