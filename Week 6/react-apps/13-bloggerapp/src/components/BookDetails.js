import React from 'react';

// Technique 1: if/else with an element variable.
function BookDetails({ hasBooks }) {
  let content;
  if (hasBooks) {
    content = <p>Featured Book: "Clean Code" by Robert C. Martin</p>;
  } else {
    content = <p>No books available right now.</p>;
  }

  return (
    <div>
      <h2>Book Details</h2>
      {content}
    </div>
  );
}

export default BookDetails;
