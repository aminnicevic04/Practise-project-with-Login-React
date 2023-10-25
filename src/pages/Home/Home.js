import React from "react";

import Card from "../../components/UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  const customStyle = {
    fontFamily: "Raleway, sans-serif",
    fontWeight: 900,
  };
  return (
    <div className={classes.wrapper}>
      <Card className={classes.home}>
        <h1>
          <span id={classes.col1} style={customStyle}>
            explore,
          </span>
          <br />
          <span id={classes.col2} style={customStyle}>
            click,
          </span>
          <br />
          <span id={classes.col3} style={customStyle}>
            delight
          </span>
          <br />
        </h1>

        <h3 className={classes.h33}>Your Shoping, Your Revolution!</h3>
      </Card>
    </div>
  );
};

export default Home;
