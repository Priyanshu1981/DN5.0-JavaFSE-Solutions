import React from 'react';

// Technique 3: && short-circuit rendering.
// Technique 4: preventing a component from rendering entirely by
// returning null.
function CourseDetails({ courses }) {
  if (!courses || courses.length === 0) {
    // Returning null prevents the component from rendering any output.
    return null;
  }

  return (
    <div>
      <h2>Course Details</h2>
      {courses.length > 0 && (
        <ul>
          {courses.map((course, i) => <li key={i}>{course}</li>)}
        </ul>
      )}
    </div>
  );
}

export default CourseDetails;
