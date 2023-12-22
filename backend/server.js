const mongoose = require("mongoose");
const express = require("express");
const User = require("./models/user");
const app = express();
const userRouter = require("./router/user");
const loggedinRouter = require("./router/loggedin");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const axios = require("axios");
const { serverUrl, password } = require("./constants.js");

//functions

///////////////////////////////
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.json());
app.use("/loggedin*", (req, res, next) => {
  if (req.session.authorization) {
    token = req.session.authorization["accessToken"];
    jwt.verify(token, "access", (err, user) => {
      if (!err) {
        req.user = user;
        next();
      } else {
        return res.status(403).json({ message: "User not authenticated" });
      }
    });
  } else {
    return res.status(403).json({ message: "User not logged in" });
  }
});
app.use("/user", userRouter);
app.use("/loggedin", loggedinRouter);

// next make it so that you can only make posts if you are logged in
app.post("/login", async (req, res) => {
  username = req.body.username;
  password = req.body.password;
  let users = await axios.get(`${serverUrl}/user/getUser`);

  let userData = users.data;
  console.log(JSON.stringify(userData, null, 2));
  let user = userData.find((user) => user.name == username);
  if (user) {
    if (user.name == username) {
      let accessToken = jwt.sign({ data: username }, "access", {
        expiresIn: "1h",
      });
      req.session.authorization = { accessToken, username };
      res.json({ message: "User logged in" });
    } else {
      res.json({ message: "Incorrect password" });
    }
  } else {
    res.json({ message: "User not found" });
  }
});
mongoose
  .connect(`mongodb+srv://jmayhugh:${password}@cluster0.5m2i0ib.mongodb.net/`)
  .then(() =>
    app.listen(3000, () => console.log("Server running on port 3000"))
  )
  .catch((err) => console.log(err));
