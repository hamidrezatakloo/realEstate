import { useState } from "react";
import LocationPicker from "../components/LocationPicker";
import styles from "./form.module.css";
import AddpostStyle from "./Addpost.module.css";
const AddPost = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Phone Number: ${phoneNumber}, Address: ${address}, Description: ${description}`
    );
    // Do something with the form data, e.g. submit to a server
  };
  return (
    <div className={AddpostStyle.container}>
      <LocationPicker />
      <div className={styles.container}>
        <form dir="rtl" onSubmit={handleSubmit} className={styles.form}>
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
