import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function EmployeeCard({ employee }) {
  // Consumes the theme directly from context — no props were passed down
  // from EmployeeList for this.
  const theme = useContext(ThemeContext);

  const style = {
    padding: '10px',
    margin: '6px 0',
    border: '1px solid #ccc',
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000'
  };

  return (
    <div style={style}>
      {employee.name} — {employee.role}
    </div>
  );
}

export default EmployeeCard;
