import React from 'react';
import styles from './CohortCard.module.css';

// Hands-on 5: Style a react component using a CSS Module and inline styles,
// applied via the className and style props.
function CohortCard({ name, mentor, status }) {
  const cardClass = status === 'Completed'
    ? `${styles.card} ${styles.completed}`
    : `${styles.card} ${styles.ongoing}`;

  // Inline style example, combined with the CSS Module classes above.
  const inlineStyle = { fontStyle: 'italic', color: '#555' };

  return (
    <div className={cardClass}>
      <h3 className={styles.title}>{name}</h3>
      <p style={inlineStyle}>Mentor: {mentor}</p>
      <span className={styles.status}>{status}</span>
    </div>
  );
}

export default CohortCard;
