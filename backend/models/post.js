const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema(
    {
        user: { type: String, required: true },
        title: { type: String, required: true },
        body: { type: String, required: true },
        picture: { type: String, required: false },
        likes: { type: Number, required: true, default: 0 },
    },
    {
        timestamps: true,
    });
const Post = mongoose.model('Post', postSchema);
module.exports = Post;