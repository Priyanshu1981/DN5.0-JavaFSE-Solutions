import React from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Blogger App</h1>
      <BookDetails hasBooks={true} />
      <BlogDetails isPublished={false} />
      <CourseDetails courses={['React Basics', 'Advanced React Patterns']} />
      {/* Renders nothing — demonstrates the "return null" technique */}
      <CourseDetails courses={[]} />
    </div>
  );
}

export default App;
