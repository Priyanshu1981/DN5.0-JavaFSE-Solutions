import React from 'react';

// Function component that accepts Name, School, Total and Goal (number of
// subjects) as props and calculates the average score of a student.
function CalculateScore(props) {
  const average = (props.Total / props.Goal).toFixed(2);

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px' }}>
      <h2>Student Score Card</h2>
      <p><strong>Name:</strong> {props.Name}</p>
      <p><strong>School:</strong> {props.School}</p>
      <p><strong>Total Marks:</strong> {props.Total}</p>
      <p><strong>Number of Subjects:</strong> {props.Goal}</p>
      <p><strong>Average Score:</strong> {average}</p>
    </div>
  );
}

export default CalculateScore;
