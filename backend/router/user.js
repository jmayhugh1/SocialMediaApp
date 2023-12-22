const express = require("express");
const router = express.Router();
const User = require("../models/user");
const app = express();

router.use(express.json());
router.post("/makeUser", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/getUser", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
