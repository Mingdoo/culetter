import React, { useContext } from "react";
import General from "./general/General";
import PostCard from "./postcard/PostCard";
import PhotoCard from "./photocard/PhotoCard";
import LetterContext from "../../contexts/LetterContext";
import Router from "next/router";
function Letter(props) {
  const { mailType } = useContext(LetterContext);
  switch (mailType) {
    case "GENERAL":
      return <General props={props} />;
    case "POSTCARD":
      return <PostCard props={props} />;
    case "PHOTOCARD":
      return <PhotoCard props={props} />;
    default:
      Router.push("/main");
      return <></>;
  }
}

export default Letter;
