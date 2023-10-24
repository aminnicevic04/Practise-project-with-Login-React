import React from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";

function SingleProduct() {
  const { id } = useParams();
  return <div className="main-Products">{id}</div>;
}

export default SingleProduct;
