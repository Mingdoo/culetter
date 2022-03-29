import React from "react";
import General from "./general/General";
import PostCard from "./postcard/PostCard";
import PhotoCard from "./photocard/PhotoCard";

function Letter(props) {
  switch (props.type) {
    case "general":
      return <General props={props} />;
      break;
    case "PostCard":
      return <PostCard props={props} />;
      break;
    case "PhotoCard":
      return <PhotoCard props={props} />;
      break;
  }
}

export default Letter;
