import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActive } from "../store/slices/PageSlice";
import { loginUser, logoutUser } from "../store/slices/UserSlice";
import MakePost from "./MakePost.js";
import "bootstrap/dist/css/bootstrap.min.css";
const Profile = () => {
  const [displayPop, setdisplayPop] = useState(false);
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.activePage.value);
  const user = useSelector((state) => state.user.userName);

  const handleClickMakePost = () => {
    setdisplayPop(true);
  };
  const handleCloseMakePost = () => {
    setdisplayPop(false);
  };

  return (
    <>
      <div id="profile">
        <h1 style={{ textAlign: "center" }}> Welcome back {user} </h1>
        <button
          className="btn btn-primary"
          onClick={() => handleClickMakePost()}
        >
          Make a post{" "}
        </button>
        <MakePost displayPop={displayPop} closeButton={handleCloseMakePost}>
         
        </MakePost>
      </div>
    </>
  );
};

export default Profile;
