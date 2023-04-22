import styles from "./post.module.css";
const Post = ({ post }) => {
  return (
    <div className={styles.post}>
      <img src="./sampleImage.jpg" alt="default" className={styles.postImage} />
      <p className={styles.address}>{post.address}</p>
    </div>
  );
};

export default Post;
