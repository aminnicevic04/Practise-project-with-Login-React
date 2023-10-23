import React, { useState, useEffect } from "react";
import "./posts.css";
import PostCard from "./PostCard";
import Right from "./right.png";
import Left from "./left.png";

function Posts() {
  const [defaultData, setDefaultData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  useEffect(() => {
    fetch(
      `https://dummyjson.com/posts?limit=${blogsPerPage}&skip=${
        (currentPage - 1) * blogsPerPage
      }&select=title,reactions,body`
    )
      .then((res) => res.json())
      .then((data) => {
        setDefaultData(data?.posts);
        console.log(defaultData);
      })
      .catch((error) => {
        console.error("Greška prilikom dobijanja podataka:", error);
      });
  }, [currentPage]);

  function next() {
    setCurrentPage(currentPage + 1);
  }

  function prev() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className="blog">
      {defaultData?.length > 0 ? (
        defaultData?.map((posts) => <PostCard posts={posts} />)
      ) : (
        <h1>Nema trenutno podataka </h1>
      )}

      <div className="pagination">
        <img
          onClick={prev}
          alt="left"
          src={Left}
          style={{ cursor: "pointer" }}
        ></img>
        {/* {pageNumbers.map((button) => (
          <button key={button} onClick={() => setCurrentPage(button)}>
            {button}
          </button>
        ))} */}
        <img
          src={Right}
          onClick={next}
          alt="right"
          style={{ cursor: "pointer" }}
        ></img>
      </div>
    </div>
  );
}

export default Posts;
