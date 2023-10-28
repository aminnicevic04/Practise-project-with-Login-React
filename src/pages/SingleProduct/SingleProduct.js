import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";
import axios from "axios";

function SingleProduct() {
  const { id } = useParams();
  const [SingleProductData, setSingleProductData] = useState({});
  const getDataProducts = () => {
    axios
      .get(`http://dummyjson.com/products/${id}`)
      .then((res) => {
        setSingleProductData(res.data);
        console.log(res.data);
      })
      .catch((error) => alert("Error fetching data:", error));
  };
  useEffect(() => {
    getDataProducts();
  }, []);

  // const bgcProduct = SingleProductData.images[0];
  // const styleRight = {
  //   width: "330px",
  //   height: "50vh",
  //   position: "absolute",
  //   right: "9rem",
  //   top: "15rem",
  //   backgroundColor: "#fff",
  //   backgroundImage: `url(${bgcProduct})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  // };

  return (
    <div className="main-Products">
      <div className="productLeft">
        <h1>{SingleProductData.title}</h1>
        <h3>
          <span className="keys">Title : </span>
          {SingleProductData.description}
        </h3>
        <h3>
          <span className="keys">Rating : </span>
          {SingleProductData.rating}
        </h3>
        <h3>
          <span className="keys">On Stock : </span>
          {SingleProductData.stock}
        </h3>
        <h3>
          <span className="keys">Price : </span>
          {SingleProductData.price}
          <span className="zeleno"> $</span>
        </h3>
        <h3>
          Register and get
          <span className="yell">
            {" "}
            {SingleProductData.discountPercentage}
          </span>{" "}
          % on this product !!!
        </h3>
      </div>
      <div className="productRight">
        {/* <img src={SingleProductData.images[2]}></img> */}
      </div>
    </div>
  );
}

export default SingleProduct;
