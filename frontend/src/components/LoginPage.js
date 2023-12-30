import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActive } from "../store/slices/PageSlice";
import { loginUser, logoutUser } from "../store/slices/UserSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  const validusers = { username: "admin", password: "admin" };
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.activePage.value);
  const user = useSelector((state) => state.user.userName);
  const password = useSelector((state) => state.user.userPassword);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const [attemptedUsername, setAttemptedUser] = useState("");
  const [attemptedPassword, setAttemptedPassword] = useState("");

  const handleUserChange = (event) => {
    // get the v
    console.log("user change detected " + event.target.value);
    setAttemptedUser(event.target.value);
  };
  const handlePasswordChange = (event) => {
    // get the v
    console.log("password change detected " + event.target.value);
    setAttemptedPassword(event.target.value);
  };

  const handleButtonClick = () => {
    console.log("attempting to login");
    console.log(" the user is " + attemptedUsername);
    console.log(" the password is " + attemptedPassword);
    if (
      attemptedUsername === validusers.username &&
      attemptedPassword === validusers.password
    ) {
      dispatch(
        loginUser({
          userName: attemptedUsername,
          userPassword: attemptedPassword,
        })
      );

      dispatch(changeActive("home"));
      console.log("logged in");
    }
  };
  return (
    <div
      style={{
        flexFlow: "column wrap",
        justifyContent: "center",
        margin: "20%",
      }}
    >
      <div>
        <div className="mb-3">
          <label
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            form="exampleFormControlInput1"
            className="form-label"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onChange={handleUserChange}
          />
        </div>
        <div className="mb-3">
          <label
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            form="exampleFormControlInput2"
            className="form-label"
          >
            password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="password"
            onChange={handlePasswordChange}
          ></input>
        </div>
      </div>
      <button onClick={handleButtonClick}>Login</button>
      <p>Active Page: {activePage}</p>
    </div>
  );
};

export default LoginPage;
