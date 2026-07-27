import React from 'react';
import Post from './Post';

// Hands-on 4: Implement componentDidMount() and componentDidCatch()
// lifecycle hooks.
class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // componentDidMount fires once, right after the component is inserted
  // into the DOM. This is where data fetching / initialisation happens.
  componentDidMount() {
    const initialPosts = [
      { id: 1, title: 'Getting started with React', body: 'React makes building UIs simple.' },
      { id: 2, title: 'Understanding the Virtual DOM', body: 'The Virtual DOM improves rendering performance.' },
      { id: 3, title: 'React Lifecycle Methods', body: 'Lifecycle hooks let you tap into key moments in a component life.' }
    ];
    this.setState({ posts: initialPosts });
  }

  // componentDidCatch acts as an error boundary — it catches errors thrown
  // during rendering in any child component below it in the tree.
  componentDidCatch(error, info) {
    console.error('Posts component caught an error:', error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h3>Something went wrong while loading the blog posts.</h3>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
