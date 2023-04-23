import Login from "./container/Login";
import Signup from "./container/Signup";
import AddPost from "./container/AddPost";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./container/Home";
import PostPage from "./container/PostPage";
import LocationContext from "./contexts/LocationContext";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [location, setLocation] = useState(null);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <LocationContext.Provider value={{ location, setLocation }}>
          <div className={styles.container}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route
                path="/addpost"
                element={
                  <PrivateRoute>
                    <AddPost />
                  </PrivateRoute>
                }
              ></Route>
              <Route path="/posts/:postId" element={<PostPage />}></Route>
            </Routes>
          </div>
        </LocationContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
