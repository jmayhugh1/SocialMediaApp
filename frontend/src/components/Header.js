import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActive } from "../store/slices/PageSlice";
import { loginUser, logoutUser } from "../store/slices/UserSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const user = useSelector((state) => state.user.userName);

  return <div>User: {user} </div>;
};

export default Header;
