import React from "react";
import Git from "../img/github_img.jpg";
const Modal = ({ item, close }) => {
  return (
    <div className="modal">
      <img src={Git} alt="" className="postImg" />
      <h1 className="postTitle">{item.name}</h1>
      <p className="postLanguages">Languages: {item.language}</p>
      <p className="postFollowers">Followers: {item.watchers}</p>
      <a href={item.html_url} className="postUrl">
        {item.html_url}
      </a>
      <p className="postDesc">Description:{item.description}</p>
      <button className="close" onClick={close}>
        Close
      </button>
    </div>
  );
};

export default Modal;
