const mongoose = require("mongoose");
const express = require("express");
const User = require("./models/user");
const app = express();
const userRouter = require("./router/user");
const loggedinRouter = require("./router/loggedin");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const axios = require("axios");
const { serverUrl, password } = require("../constants.js");

//functions

// Add CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// ... rest of your server setup

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(express.json());
app.use("/user", userRouter);
app.use("/loggedin", loggedinRouter);

// next make it so that you can only make posts if you are logged in

mongoose
  .connect(`mongodb+srv://jmayhugh:${password}@cluster0.5m2i0ib.mongodb.net/`)
  .then(() =>
    app.listen(4000, () => console.log("Server running on port 3000"))
  )
  .catch((err) => console.log(err));
