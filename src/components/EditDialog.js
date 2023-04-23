import { useState } from "react";
import LocationPicker from "./LocationPicker";
import styles from "./EditDialog.module.css";

function EditDialog({ postInfo, isOpen, onClose, onSubmit }) {
  const [editedPostInfo, setEditedPostInfo] = useState(postInfo);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPostInfo((prevPostInfo) => ({
      ...prevPostInfo,
      [name]: value,
    }));
  };
  return (
    <div
      className={styles.editDialogWrapper}
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div dir="rtl" className={styles.editDialogContent}>
        <h2>اطلاعات پست را اصلاح کنید</h2>
        <label htmlFor="phone">شماره تماس</label>
        <input
          type="tel"
          name="phone"
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
          <button
            id={styles.confirm}
            onClick={() => onSubmit(editedPostInfo, setEditedPostInfo)}
          >
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
