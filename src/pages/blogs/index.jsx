import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

function Blog() {
  const posts = useLoaderData();

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
