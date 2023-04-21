import Login from "./container/Login";
import Signup from "./container/Signup";
import AddPost from "./container/AddPost";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/addpost" element={<AddPost />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
