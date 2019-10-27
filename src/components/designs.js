import React from "react";
import { Link } from "react-router-dom";

export default function Designs() {
  return (
    <div className="wrapper">
      <Link to="/design-1" style={{ textDecoration: "none" }}>
        {" "}
        <div className="zoom-effect-container">
          <div className="image-card">
            <img src="https://i.imgur.com/W6fj9u5.jpg" />
          </div>
        </div>
      </Link>
      <Link to="/design-2" style={{ textDecoration: "none" }}>
        <div className="zoom-effect-container">
          <div className="image-card">
            <img src="https://i.imgur.com/0rqcjND.jpg" />
          </div>
        </div>
      </Link>
    </div>
  );
}
