import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
    <div>
      <img src="/sampleImage.jpg" />
      <div>
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
    </div>
  );
}

export default PostPage;