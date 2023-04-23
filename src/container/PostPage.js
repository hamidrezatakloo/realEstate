import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./PostPage.module.css";
import ShowLocation from "../components/Showlocation";
import EditDialog from "../components/EditDialog";
import LocationContext from "../contexts/LocationContext";
function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const { location } = useContext(LocationContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error(error));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  function handleSubmit(newPostInfo) {
    // Update Post information
    fetch(`http://localhost:4000/posts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newPostInfo, location: location }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Updated post:", data);
        setPost(newPostInfo);
      })
      .catch((error) => {
        console.error("Error updating post:", error);
      });

    //close dialog box
    setIsEditDialogOpen(false);
  }

  function handleRemovePost() {
    // Remove Post
    fetch(`http://localhost:4000/posts/${postId}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log("Deleted post with ID:", postId);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
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
      <button
        onClick={() => setIsEditDialogOpen(true)}
        className={styles.editButton}
      >
        تغییر اطلاعات
      </button>
      <button onClick={handleRemovePost} className={styles.removeButton}>
        حذف پست
      </button>
      <EditDialog
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        postInfo={post}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default PostPage;
