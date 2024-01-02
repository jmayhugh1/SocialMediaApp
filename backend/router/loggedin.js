const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const app = express();

router.use(express.json());

router.post("/makePost", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.send(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/getPost", async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get post by user
router.get("/getPost/:user", async (req, res) => {
  try {
    const posts = await Post.find({ user: req.params.user });
    res.send(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;