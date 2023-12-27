import React from "react";
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
  const handleUserChange = (event) => {
    dispatch(
      loginUser({ userName: event.target.value, userPassword: password })
    );
  };
  const handlePasswordChange = (event) => {
    dispatch(loginUser({ userPassword: event.target.value, userName: user }));
  };

  const handleButtonClick = () => {
    console.log("attempting to login");
    console.log(" the user is " + user);
    console.log(" the password is " + password);
    if (user === validusers.username && password === validusers.password) {
      dispatch(loginUser({ userName: user, userPassword: password }));
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
            for="exampleFormControlInput1"
            className="form-label"
          >
            Email address
          </label>
          <input
            onChange={(event) => handleUserChange(event)}
            value={user}
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            for="exampleFormControlInput2"
            className="form-label"
          >
            password
          </label>
          <input
            onChange={(event) => handlePasswordChange(event)}
            value={password}
            type="password"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="password"
          ></input>
        </div>
      </div>
      <button onClick={handleButtonClick}>Login</button>
      <p>Active Page: {activePage}</p>
    </div>
  );
};

export default LoginPage;
