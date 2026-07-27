import React from 'react';

// Technique 2: inline ternary operator.
function BlogDetails({ isPublished }) {
  return (
    <div>
      <h2>Blog Details</h2>
      {isPublished ? (
        <p>"10 Tips for Clean React Code" — Published</p>
      ) : (
        <p>This blog post is still in draft.</p>
      )}
    </div>
  );
}

export default BlogDetails;
