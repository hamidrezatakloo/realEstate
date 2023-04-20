import { useState } from "react";
import styles from "./auth.module.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // send username and password to server
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    // reset form
    setEmail("");
    setPassword("");
  }

  return (
    <div className={styles.authPage}>
      <div className={styles.container}>
        <h1>ورود</h1>
        <p>لطفا برای ورودایمیل و گذر واژه خود را وارد کنید</p>
        <form className={styles.authForm} onSubmit={handleSubmit}>
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
