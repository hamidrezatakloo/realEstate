import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import "./Navbar.module.css";
function NavBar() {
  const { currentUser } = useContext(UserContext);
  const location = useLocation();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">صفحه اصلی</Link>
        </li>
        {currentUser ? (
          <>
            {location.pathname !== "/addpost" && (
              <li>
                <Link to="/addpost">ثبت آگهی</Link>
              </li>
            )}
            <li>
              خوش آمدید
              <span style={{ fontWeight: "bold", margin: "0 10px" }}>
                {currentUser.username}
              </span>
              کاربر
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signup">ثبت نام</Link>
            </li>
            <li>
              <Link to="/login">ورود</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
