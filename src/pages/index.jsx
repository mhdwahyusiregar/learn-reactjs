import posts from '../posts.json';
import Article from '../components/Article';

function Homepage() {
  return (
    <>
      <h1>Simple Blog</h1>
      {posts.map((blog) => (
        <Article
          key={blog.title}
          title={blog.title}
          tags={blog.tags}
          date={blog.date}
        />
      ))}
    </>
  );
}

export default Homepage;
