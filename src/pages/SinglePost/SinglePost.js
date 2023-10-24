import React from "react";
import { useParams } from "react-router-dom";
import "./SinglePost.css";

function SinglePost() {
  const { id } = useParams();
  return <div className="main-posts">dsadsadsa {id}</div>;
}

export default SinglePost;
