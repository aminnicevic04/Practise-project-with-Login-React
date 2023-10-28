import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SinglePost.css";

function SinglePost() {
  const { id } = useParams();
  const [singlePostData, setsinglePostData] = useState({});
  useEffect(() => {
    fetch(`http://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setsinglePostData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Greška prilikom dobijanja podataka:", error);
      });
  }, []);

  return (
    <div className="main-posts">
      <div className="post-card">
        <h1>{singlePostData.title}</h1>
        <h3>{singlePostData.body}</h3>
        {singlePostData.tags && singlePostData.tags.length > 0 && (
          <div className="tags">
            {singlePostData.tags.map((tag, index) => (
              <span key={index} className="tag">
                # {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
