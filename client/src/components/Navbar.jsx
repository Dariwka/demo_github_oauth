import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Diana's App
        </Link>
      </span>{" "}
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src="https://res.cloudinary.com/lvimeridijan/image/upload/v1671023693/me/77b0236a-e6d0-49cd-96be-69fefbcb7b5b_trluvr.jpg"
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">John Doe</li>
          <li className="listItem">Logout</li>
        </ul>
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
