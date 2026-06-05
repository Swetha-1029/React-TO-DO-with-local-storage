import React, { useState } from 'react';
import styles from './TodoInput.module.css';

function TodoInput({ onAdd }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd({ text: trimmed, priority });
    setText('');
    setPriority('medium');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputRow}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={120}
        />
        <button className={styles.addBtn} type="submit" aria-label="Add task">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
      <div className={styles.priorities}>
        {['low', 'medium', 'high'].map((p) => (
          <button
            key={p}
            type="button"
            className={`${styles.priorityBtn} ${styles[p]} ${priority === p ? styles.active : ''}`}
            onClick={() => setPriority(p)}
          >
            {p}
          </button>
        ))}
      </div>
    </form>
  );
}

export default TodoInput;
