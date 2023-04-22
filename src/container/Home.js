import { useState, useEffect } from "react";
import Post from "../components/Post";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        `http://localhost:4000/posts?_page=${currentPage}&_limit=6`
      );
      const data = await response.json();
      setPosts(data);

      // Extract the total number of posts from the response headers
      const totalCount = response.headers.get("X-Total-Count");
      setTotalPages(Math.ceil(totalCount / 6)); // Calculate the total number of pages based on the total count
    }
    fetchPosts();
  }, [currentPage]);

  function handlePrevPage() {
    setCurrentPage(currentPage - 1);
  }

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Post post={post} />
              </li>
            ))}
          </ul>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
