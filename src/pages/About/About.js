import React from "react";
import Card from "../../components/UI/Card/Card";
import classes from "./About.module.css";

function About() {
  return (
    <>
      <Card className={classes.about}>
        <h1>Welcome to About Page!</h1>
      </Card>
    </>
  );
}

export default About;
