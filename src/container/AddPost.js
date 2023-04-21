import { useState } from "react";
import LocationPicker from "../components/LocationPicker";
import styles from "./form.module.css";
import AddpostStyle from "./Addpost.module.css";
import LocationContext from "../contexts/LocationContext";
const AddPost = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Phone Number: ${phoneNumber}, Address: ${address}, Description: ${description}`
    );
    // Do something with the form data, e.g. submit to a server
  };
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      <div className={AddpostStyle.container}>
        <LocationPicker />
        <div
          className={[styles.container, AddpostStyle.formContainer].join(" ")}
        >
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
    </LocationContext.Provider>
  );
};
export default AddPost;
