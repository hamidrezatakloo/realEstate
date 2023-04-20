import { useState } from "react";
import styles from "./auth.module.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.authPage}>
      <div className={styles.container}>
        <h1>ورود</h1>
        <p>لطفا برای ورودایمیل و گذر واژه خود را وارد کنید</p>
        <form className={styles.authForm}>
          <label>
            ایمیل
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            گذر واژه
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <button type="submit">ورود</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
