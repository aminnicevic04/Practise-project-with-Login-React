import React from "react";
import { useParams } from "react-router-dom";

function SinglePost() {
  const { id } = useParams();
  console.log(id);
  return <div>{id}</div>;
}

export default SinglePost;
