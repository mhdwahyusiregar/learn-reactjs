import { useEffect, useState } from 'react';
import postsData from '../posts.json';
import Article from '../components/Article';
import Search from '../components/Search';

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);
  const [externalPosts, setExternalPosts] = useState([]);
  // externalpost akan di isi dengan data json di bawah, kemudian di tampilkan saat kita map
  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value),
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setExternalPosts(json));
  }, []);

  useEffect(() => {
    console.log('Ada post baru');
  }, [posts]);

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
      <hr />
      <h2>External Posts</h2>
      {externalPosts.map((item, index) => (
        <div key={index}>- {item.title}</div>
      ))}
    </>
  );
}

export default Homepage;

// useState untuk mengubah state search dengan fungsi changeSearch
