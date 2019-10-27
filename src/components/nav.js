import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav-container">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="logo">M M</div>
      </Link>

      <div className="nav-btns">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="pocetna">HOME</div>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          {" "}
          <div className="pocetna">CONTACT</div>
        </Link>
      </div>
    </div>
  );
}
