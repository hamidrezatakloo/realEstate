import { useState } from "react";

function EditDialog({ postInfo }) {
  const [editedPostInfo, setEditedPostInfo] = useState(postInfo);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPostInfo((prevPostInfo) => ({
      ...prevPostInfo,
      [name]: value,
    }));
  };

  return (
    <div>
      <div>
        <div>
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
            value={editedPostInfo.description}
            onChange={handleInputChange}
          />
          <button>تایید</button>
          <button>انصراف</button>
        </div>
      </div>
    </div>
  );
}

export default EditDialog;
