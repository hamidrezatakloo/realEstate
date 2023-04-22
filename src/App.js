import Login from "./container/Login";
import Signup from "./container/Signup";
import AddPost from "./container/AddPost";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className={styles.container}>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/addpost" element={<AddPost />}></Route>
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
