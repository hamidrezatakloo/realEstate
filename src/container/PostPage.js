import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./PostPage.module.css";
import ShowLocation from "../components/Showlocation";
function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error(error));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.post}>
      <img src="/sampleImage.jpg" />
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <p>
            شماره تماس:<span>{post.phoneNumber}</span>
          </p>
          <p>
            آدرس:<span>{post.address}</span>
          </p>
          <p>
            توضیح:<span>{post.description}</span>
          </p>
        </div>
        <div className={styles.location}>
          <ShowLocation location={post.location} />
        </div>
      </div>
    </div>
  );
}

export default PostPage;
