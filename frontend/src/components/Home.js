import React, { useEffect, useState } from "react";
import axios from "axios";
import { serverUrl } from "../constants";
import Post from "./Post";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const renderPosts = () => {
    getAllPosts()
      .then((result) => {
        setPosts(result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("done");
      });
  };
  const getAllPosts = async () => {
    try {
      console.log("fetching posts with " + serverUrl + "/loggedin/getPost");
      const response = await axios.get(`${serverUrl}/loggedin/getPost`);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log("there was an error getting all the posts" + err);
      return [];
    }
  };

  useEffect(() => {
    renderPosts();
  }, []);

  console.log("posts are " + JSON.stringify(posts, null, 2));
  return (
    <div>
      <h1>Home</h1>
      {posts.map((post) => {
        return (
          <Post
            user={post.user}
            title={post.title}
            body={post.body}
            picture={post.picture}
            likes={post.likes}
          />
        );
      })}
    </div>
  );
};
export default Home;
