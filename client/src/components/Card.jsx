import React, { useState } from "react";
import Modal from "./Modal";
import Git from "../img/github_img.jpg";

const Card = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const close = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="card" onClick={() => setShowModal(!showModal)}>
        <span className="title">{item.name}</span>
        <img src={Git} alt="" className="img" />
        <p className="desc">{item.desc}</p>
      </div>
      {showModal && <Modal item={item} close={close} />}
    </>
  );
};

export default Card;
