import React from 'react';
import styles from './StatsBar.module.css';

function StatsBar({ total, completed }) {
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className={styles.stats}>
      <div className={styles.label}>
        <span>{completed} of {total} done</span>
        <span className={styles.percent}>{percent}%</span>
      </div>
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default StatsBar;
