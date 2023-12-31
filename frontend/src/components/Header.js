import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActive } from "../store/slices/PageSlice";
import { loginUser, logoutUser } from "../store/slices/UserSlice";
import { changePage } from "../store/slices/NavSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const user = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();
  const nav = useSelector((state) => state.nav.currentPage);
  console.log("the nav is " + nav);
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <a
            className={nav === "home" ? "nav-link active" : "nav-link disabled"}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className={nav === "Profile" ? "nav-link active" : "nav-link disabled"}>
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a className={nav === "Friends" ? "nav-link active" : "nav-link disabled"}>
            Friends
          </a>
        </li>
        
      </ul>
    </div>
  );
};

export default Header;
