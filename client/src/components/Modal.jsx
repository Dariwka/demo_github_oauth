import React from "react";
import { posts } from "../data";

const Modal = () => {
  const post = posts[2];
  return (
    <div className="modal">
      <img src={post.img} alt="" className="postImg" />
      <h1 className="postTitle">{post.title}</h1>
      <p className="postLanguages">Languages: {post.languages}</p>
      <p className="postFollowers">Followers: {post.followers}</p>
      <a href={post.url} className="postUrl">
        {post.url}
      </a>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Modal;
