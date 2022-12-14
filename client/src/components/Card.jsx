import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ post }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="card" onClick={() => setShowModal(!showModal)}>
        <span className="title">{post.title}</span>
        <img src={post.img} alt="" className="img" />
        <p className="desc">{post.desc}</p>
      </div>
      {showModal && <Modal />}
    </>
  );
};

export default Card;
