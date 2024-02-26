import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <>
      <h1>My Blog Posts</h1>
      <ul>
        {posts.map((item, index) => (
          <li key={index}>
            <Link to={`/blog/${item.id}`}> {item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Blog;
