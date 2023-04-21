import { useState } from "react";
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          شماره موبایل:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </label>
        <label>
          آدرس:
          <input
            type="text"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </label>
        <label>
          توضیح:
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddPost;
