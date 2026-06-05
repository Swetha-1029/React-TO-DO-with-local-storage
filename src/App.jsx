import React, { useState, useMemo } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import FilterBar from './components/FilterBar';
import StatsBar from './components/StatsBar';
import styles from './App.module.css';

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function App() {
  const [todos, setTodos] = useLocalStorage('react-todos', []);
  const [filter, setFilter] = useState('all');

  const addTodo = ({ text, priority }) => {
    const newTodo = {
      id: generateId(),
      text,
      priority,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: newText } : t))
    );
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  const filteredTodos = useMemo(() => {
    if (filter === 'active') return todos.filter((t) => !t.completed);
    if (filter === 'completed') return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  const counts = useMemo(() => ({
    all: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  }), [todos]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            my<span className={styles.accent}>tasks</span>
          </h1>
          <p className={styles.subtitle}>Stay on top of everything</p>
        </header>

        <TodoInput onAdd={addTodo} />

        {todos.length > 0 && (
          <StatsBar total={todos.length} completed={counts.completed} />
        )}

        <FilterBar
          filter={filter}
          setFilter={setFilter}
          counts={counts}
          onClearCompleted={clearCompleted}
        />

        <div className={styles.list}>
          {filteredTodos.length === 0 ? (
            <div className={styles.empty}>
              {filter === 'all' ? (
                <>
                  <span className={styles.emptyIcon}>✦</span>
                  <p>No tasks yet. Add one above!</p>
                </>
              ) : (
                <p>No {filter} tasks.</p>
              )}
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
