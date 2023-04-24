import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
function NavBar() {
  const { currentUser } = useContext(UserContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">صفحه اصلی</Link>
        </li>
        {currentUser ? (
          <>
            <li>
              <Link to="/Addpost">ثبت آگهی</Link>
            </li>

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
