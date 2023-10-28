import * as React from "react";

import classes from "./Navigation.module.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Navigation = (props) => {
  const navigate = useNavigate();
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a onClick={() => navigate("/about-us")}>About</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a onClick={() => navigate("/products")}>Products</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a onClick={() => navigate("/posts")}>Posts</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <Button onClick={props.onLogout} variant="outlined">
              Logout
            </Button>
            {/* <button onClick={props.onLogout}>Logout</button> */}
          </li>
        )}
      </ul>
    </nav>
  );
};

// koristi NavLink za navbar navigaciju sa rutama ?>
// zbog toga sto ima active i pending sto pomaze pri css editingu

export default Navigation;
