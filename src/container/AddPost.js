import { useContext, useState } from "react";
import LocationPicker from "../components/LocationPicker";
import styles from "./form.module.css";
import AddpostStyle from "./Addpost.module.css";
import LocationContext from "../contexts/LocationContext";
import UserContext from "../contexts/UserContext";
const AddPost = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const { currentUser } = useContext(UserContext);
  const { location } = useContext(LocationContext);
  const UserId = currentUser.id;
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserId,
        phoneNumber,
        address,
        description,
        location,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  return (
    <div className={AddpostStyle.container}>
      <LocationPicker />
      <div className={[styles.container, AddpostStyle.formContainer].join(" ")}>
        <form
          dir="rtl"
          onSubmit={handleSubmit}
          className={[styles.form, AddpostStyle.form].join(" ")}
        >
          <label>
            شماره موبایل
            <input
              type="tel"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </label>
          <label>
            آدرس
            <input
              type="text"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </label>
          <label>
            توضیح
            <textarea
              rows={8}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <button type="submit">ثبت آگهی</button>
        </form>
      </div>
    </div>
  );
};
export default AddPost;
