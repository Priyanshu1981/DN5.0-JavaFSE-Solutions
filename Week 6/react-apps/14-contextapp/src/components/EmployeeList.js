import React from 'react';
import EmployeeCard from './EmployeeCard';

// Note: EmployeeList no longer accepts a "theme" prop at all — that was
// the substandard part of the original design. It just renders the cards,
// and each EmployeeCard reads the theme for itself via context.
function EmployeeList({ employees }) {
  return (
    <div>
      <h2>Employee List</h2>
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
}

export default EmployeeList;
