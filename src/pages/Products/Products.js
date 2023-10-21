import React from "react";
import Card from "../../components/UI/Card/Card";
import classes from "./Products.module.css";

function Products() {
  return (
    <Card className={classes.products}>
      <h1>Welcome to Products Page!</h1>
    </Card>
  );
}

export default Products;
