import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import { useNavigate } from "react-router-dom";

const MainHeader = (props) => {
  const navigate = useNavigate();
  return (
    <header className={classes["main-header"]}>
      <h1 onClick={() => navigate("/")}>Classic Page</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;
