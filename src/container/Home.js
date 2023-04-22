import { useState, useEffect } from "react";
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        `http://localhost:4000/posts?_page=${1}&_limit=6`
      );
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.address}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
