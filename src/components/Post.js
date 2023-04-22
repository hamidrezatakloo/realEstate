import styles from "./post.module.css";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`} className={styles.link}>
      <div className={styles.post}>
        <img
          src="./sampleImage.jpg"
          alt="default"
          className={styles.postImage}
        />
        <p className={styles.address}>{post.address}</p>
      </div>
    </Link>
  );
};

export default Post;
