import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slika from "./slika.png";
import "./postCard.css";

function PostCard({ posts }) {
  const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || {};
  const [likes, setLikes] = useState(
    posts.reactions + Object.keys(likedPosts).length
  );
  const [hasLiked, setHasLiked] = useState(likedPosts[posts.id]);

  const handleLikeClick = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
      const updatedLikedPosts = {
        ...likedPosts,
        [posts.id]: true,
      };
      localStorage.setItem("likedPosts", JSON.stringify(updatedLikedPosts));
    }
  };

  const navigate = useNavigate();

  return (
    <div className="post" onClick={() => navigate(`/posts${posts.id}`)}>
      <div className="naslov">
        <h1>
          <span className="keys">{posts.title}</span>
        </h1>
      </div>
      <div className="body">
        <h3>
          <span className="keys">{posts.body}</span>
        </h3>
      </div>
      <div className="likes">
        <img
          src={Slika}
          alt="like"
          onClick={handleLikeClick}
          style={{ cursor: "pointer" }}
        />
        {hasLiked ? (
          <h4>
            You and {likes - 1} {likes === 1 ? "person" : "people"} like this
            post.
          </h4>
        ) : (
          <h4>
            {likes} {likes === 1 ? "user likes" : "users like"} this post.
          </h4>
        )}
      </div>
    </div>
  );
}

export default PostCard;
