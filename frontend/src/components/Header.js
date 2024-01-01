import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActive } from "../store/slices/PageSlice";
import { loginUser, logoutUser } from "../store/slices/UserSlice";
import { changePage } from "../store/slices/NavSlice";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const user = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();
  const nav = useSelector((state) => state.nav.currentPage);
  const navigate = useNavigate();
  const navigateToNew = (page) => {
    dispatch(changePage(page));
    console.log("changing page to " + page);
    navigate("/" + page, { replace: true });
  };
  console.log("the nav is " + nav);
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <a
            className={
              nav === "home" ? "nav-link active" : "nav-link"
            }
            onClick={() => navigateToNew("home")}
            style={{ cursor: "pointer" }}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className={
              nav === "profile" ? "nav-link active" : "nav-link"
            }
            onClick={() => navigateToNew("profile")}
            style={{ cursor: "pointer" }}
          >
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a
            className={
              nav === "friends" ? "nav-link active" : "nav-link"
            }
            onClick={() => navigateToNew("friends")}
            style={{ cursor: "pointer" }}
          >
            Friends
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
