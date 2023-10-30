import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";
import axios from "axios";

function SingleProduct() {
  const { id } = useParams();
  const [singleProductData, setSingleProductData] = useState({});
  useEffect(() => {
    const getDataProducts = async () => {
      try {
        const response = await axios.get(`http://dummyjson.com/products/${id}`);
        setSingleProductData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getDataProducts();
  }, [id]);
  const loading = false;

  return (
    <div className="main-Products">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="productLeft">
            <h1>{singleProductData.title}</h1>
            <h3>
              <span className="keys">Title : </span>
              {singleProductData.description}
            </h3>
            <h3>
              <span className="keys">Rating : </span>
              {singleProductData.rating}
            </h3>
            <h3>
              <span className="keys">On Stock : </span>
              {singleProductData.stock}
            </h3>
            <h3>
              <span className="keys">Price : </span>
              {singleProductData.price}
              <span className="zeleno"> $</span>
            </h3>
            <h3>
              Register and get
              <span className="yell">
                {" "}
                {singleProductData.discountPercentage}
              </span>{" "}
              % on this product !!!
            </h3>
          </div>
          <div className="productRight">
            {singleProductData.images && singleProductData.images[1] ? (
              <img src={singleProductData.images[0]} alt="Product" />
            ) : (
              <p>No Image Available</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default SingleProduct;
