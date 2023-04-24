import { useContext, useEffect, useState } from "react";
import LocationPicker from "./LocationPicker";
import styles from "./EditDialog.module.css";
import LocationContext from "../contexts/LocationContext";

function EditDialog({ postInfo, isOpen, onClose, onSubmit }) {
  const [editedPostInfo, setEditedPostInfo] = useState(postInfo);
  const { setLocation } = useContext(LocationContext);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPostInfo((prevPostInfo) => ({
      ...prevPostInfo,
      [name]: value,
    }));
  };
  useEffect(() => {
    setLocation(postInfo.location);
  }, []);
  return (
    <div
      className={styles.editDialogWrapper}
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div dir="rtl" className={styles.editDialogContent}>
        <h2>اطلاعات پست را اصلاح کنید</h2>
        <label htmlFor="phoneNumber">شماره تماس</label>
        <input
          type="tel"
          name="phoneNumber"
          id="phone"
          value={editedPostInfo.phoneNumber}
          onChange={handleInputChange}
        />
        <label htmlFor="address">آدرس</label>
        <input
          type="text"
          name="address"
          id="address"
          value={editedPostInfo.address}
          onChange={handleInputChange}
        />
        <label htmlFor="description">توضیح</label>
        <textarea
          name="description"
          id="description"
          rows={6}
          value={editedPostInfo.description}
          onChange={handleInputChange}
        />

        <div className={styles.location}>{isOpen && <LocationPicker />}</div>

        <div className={styles.buttons}>
          <button id={styles.confirm} onClick={() => onSubmit(editedPostInfo)}>
            تایید
          </button>
          <button id={styles.cancel} onClick={onClose}>
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditDialog;
