import { useState } from "react";
import styles from "./Signup.module.css";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.signupPage}>
      <div className={styles.container}>
        <h1>ثبت نام</h1>
        <p>لطفا برای ثبت نام اطلاعات خود را وارد کنید</p>
        <form className={styles.signupForm}>
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
    </div>
  );
};

export default Signup;
