import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActive } from "../store/slices/PageSlice";
import { loginUser, logoutUser } from "../store/slices/UserSlice";
import "bootstrap/dist/css/bootstrap.min.css";
const Profile = () => {
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.activePage.value);
  const user = useSelector((state) => state.user.userName);
  useEffect(() => {
    console.log(user);
  },[]);
  return (
    <>
      <div id="profile">
        <h1 style={{ textAlign: "center" }}> Welcome back {user} </h1>
      </div>
      
    </>
  );
};

export default Profile;
