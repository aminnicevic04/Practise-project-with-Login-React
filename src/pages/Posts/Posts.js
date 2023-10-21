import React from "react";
import Card from "../../components/UI/Card/Card";
import classes from "./Posts.module.css";

function Posts() {
  return (
    <Card className={classes.posts}>
      <h1>Welcome to Posts Page!</h1>
    </Card>
  );
}

export default Posts;
