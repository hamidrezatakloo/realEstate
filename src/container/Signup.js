import { useState } from "react";
import styles from "./form.module.css";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(event) {
    event.preventDefault();
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.container}>
      <h1>ثبت نام</h1>
      <p>لطفا برای ثبت نام اطلاعات خود را وارد کنید</p>
      <form className={styles.form} onSubmit={handleSignup}>
        <label>
          نام کاربری
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          ایمیل
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          گذر واژه
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">ثبت نام</button>
      </form>
    </div>
  );
};

export default Signup;
