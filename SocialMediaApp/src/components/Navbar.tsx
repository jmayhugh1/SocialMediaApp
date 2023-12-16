import { MouseEvent } from "react";
import { useState } from "react";
const Navbar = () => {
  // all of the states
  const [selected, setSelected] = useState("viewPosts");

  const handleClickedButton = (event: MouseEvent, name: string) => {
    console.log(name + " was clicked");
    setSelected(name);
    console.log(selected);
  };
  return (
    <>
      <div className="btn-group" role="group" aria-label="navGroups">
        <button
          onClick={(event) => handleClickedButton(event, "followerSearch")}
          id="followerSearch"
          type="button"
          className={`btn ${
            selected === "followerSearch"
              ? "btn-primary"
              : "btn-outline-primary"
          }`}
        >
          Follower Search
        </button>
        <button
          onClick={(event) => handleClickedButton(event, "makePost")}
          id="makePost"
          type="button"
          className={`btn ${
            selected === "makePost"
              ? "btn-primary"
              : "btn-outline-primary"
          }`}
        >
          Make a post
        </button>
        <button
          onClick={(event) => handleClickedButton(event, "viewPosts")}
          id="viewPosts"
          type="button"
          className={`btn ${
            selected === "viewPosts"
              ? "btn-primary"
              : "btn-outline-primary"
          }`}
        >
          View other peoples post
        </button>
      </div>
    </>
  );
};

export default Navbar;
