import React, { useEffect } from "react";
const Post = ({ user, title, body, picture, likes }) => {
  const [imageURL, setImageURL] = React.useState(null);
  const fetchimage = async (image) => {
    try {
      //THIS NEEDS TO BE FIXED NEED TO SEE HOW TO LOAD PICTURES FROM
      //FIREBASE STORAGE
      const gcsUrl = picture;
      console.log("the picture url is " + gcsUrl);
      const response = await fetch(gcsUrl);
      console.log("the response is " + response);
      const blob = await response.blob();
      console.log("the blob is " + blob);
      const objectURL = URL.createObjectURL(blob);
      console.log("the object url is " + objectURL);
      setImageURL(objectURL);
    } catch (err) {
      console.log("the error from trying to fetch inage " + err);
    }
  };
  useEffect(() => {
    fetchimage(picture);
  }, []);
  return (
    <div>
      <h1>{user}</h1>
      <h2>
        {title} likes: {likes}{" "}
      </h2>
      <img src={imageURL} alt="picture" />
      <h4>{body}</h4>
    </div>
  );
};

export default Post;
