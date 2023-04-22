const Post = ({ post }) => {
  return (
    <div>
      <img src="./sampleImage.jpg" alt="default" />
      <p>{post.address}</p>
    </div>
  );
};

export default Post;
