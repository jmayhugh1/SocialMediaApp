import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MakePost.css";
const MakePost = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userName);

  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      console.log("img", img);
      let imageObject = URL.createObjectURL(img);
      console.log("imageObject", imageObject);
      setImage(imageObject);
    }
  };
  const submitPost = () => {
    // submit the post
    //get the title and body
    let titleToSubmit = document.getElementById("title").value;
    let bodyToSubmit = document.getElementById("postBody").value;
    //get time value
    let timeToSubmit = new Date().getTime();
    let userToSubmit = user;

    //hash the title, body, time and user to save the image
    let stringtohash =
      userToSubmit + titleToSubmit + bodyToSubmit + timeToSubmit;
    let imageName = stringtohash.hashCode();
    // save the imsge to the public folder


    console.log("submitting post with title " + titleToSubmit);
    console.log("submitting post with body " + bodyToSubmit);
    console.log("submitting post with user " + userToSubmit);
  };
  const handleCloseButton = () => {
    props.closeButton();
    setImage(null);
    URL.revokeObjectURL(image);
  };
  return props.displayPop ? (
    <div className="makepost">
      <div className="makepost-inner">
        <button
          className="btn btn-secondary"
          onClick={() => handleCloseButton()}
        >
          close
        </button>
        <h3> Make a new post </h3>
        {
          /* get the Title, body and image
           */
          <div>
            <div className="mb-3">
              <label form="formFile" className="form-label">
                Upload your picture here
              </label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                accept="image/*"
                onChange={(e) => onImageChange(e)}
              />
            </div>
            <div className="mb-3">
              {image !== null ? (
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                  src={image}
                  alt="picture"
                />
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="title"
                aria-label="default input example"
                id="title"
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="description"
                className="form-control"
                id="postBody"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => submitPost()}
            >
              Submit
            </button>
          </div>
        }
      </div>
    </div>
  ) : (
    ""
  );
};

export default MakePost;
