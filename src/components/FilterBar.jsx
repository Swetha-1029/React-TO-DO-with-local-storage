import React from 'react';
import styles from './FilterBar.module.css';

const FILTERS = ['all', 'active', 'completed'];

function FilterBar({ filter, setFilter, counts, onClearCompleted }) {
  return (
    <div className={styles.bar}>
      <div className={styles.filters}>
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`${styles.filterBtn} ${filter === f ? styles.active : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
            <span className={styles.count}>{counts[f]}</span>
          </button>
        ))}
      </div>
      {counts.completed > 0 && (
        <button className={styles.clearBtn} onClick={onClearCompleted}>
          Clear done
        </button>
      )}
    </div>
  );
}

export default FilterBar;
