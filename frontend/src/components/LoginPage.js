import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActive } from "../store/slices/PageSlice";
import { loginUser, logoutUser, getAllUsers } from "../store/slices/UserSlice";
import { useNavigate } from "react-router-dom";
import { changePage } from "../store/slices/NavSlice";
import "bootstrap/dist/css/bootstrap.min.css";
const axios = require("axios");

const LoginPage = () => {
  const validusers = { username: "admin", password: "admin" };
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.activePage.value);
  const user = useSelector((state) => state.user.userName);
  const password = useSelector((state) => state.user.userPassword);
  const allUsers = useSelector((state) => state.user.allUsers);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const [attemptedUsername, setAttemptedUser] = useState("");
  const [attemptedPassword, setAttemptedPassword] = useState("");
  const navigate = useNavigate();

  const fetchUsers = async () => {
    console.log("fetching users");
    const response = await dispatch(getAllUsers());
    console.log("response is " + JSON.stringify(response, null, 2));

    const foundUser = response.payload.filter((user) => {
      return (
        user.name === attemptedUsername && user.password === attemptedPassword
      );
    });

    console.log("HELLO the user is " + JSON.stringify(foundUser, null, 2));
    if (
      foundUser.length > 0 &&
      foundUser[0].name === attemptedUsername &&
      foundUser[0].password === attemptedPassword
    ) {
      //route to home page

      console.log("you have successfully logged in");
      dispatch(
        loginUser({
          userName: attemptedUsername,
          userPassword: attemptedPassword,
          loggedIn: true,
        })
      );
      dispatch(changePage("home"));
      
      dispatch(changeActive("home"));
      console.log("logged in");
      console.log("trying to route to home page");
      navigate("/home");
    } else {
      console.log("you have failed to log in");
      dispatch(logoutUser());
    }
    return response;
  };

  const handleUserChange = async (event) => {
    // get the v
    console.log("user change detected " + event.target.value);
    setAttemptedUser(event.target.value);
  };
  const handlePasswordChange = (event) => {
    // get the v
    console.log("password change detected " + event.target.value);
    setAttemptedPassword(event.target.value);
  };

  const handleButtonClick = async () => {
    console.log("attempting to login");
    console.log(" the user is " + attemptedUsername);
    console.log(" the password is " + attemptedPassword);
    await fetchUsers();
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
