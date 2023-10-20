import React from "react";

import classes from "./Navigation.module.css";
import { useNavigate } from "react-router-dom";

const Navigation = (props) => {
  const navigate = useNavigate();
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a onClick={() => navigate("/about-us")}>About Us</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a onClick={() => navigate("/products")}>Products</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

// koristi NavLink za navbar navigaciju sa rutama ?>
// zbog toga sto ima active i pending sto pomaze pri css editingu

export default Navigation;
