import React from "react";
import { Link } from "react-router-dom";

export default function ProjectsDisplay() {
  return (
    <div className="wrapper">
      <div className="zoom-effect-container">
        <Link to="/project/OneFrame" style={{ textDecoration: "none" }}>
          <div className="image-card">
            <img src="https://i.imgur.com/0rqcjND.jpg" />
          </div>
        </Link>
      </div>
      <Link to="/project/Hac5" style={{ textDecoration: "none" }}>
        <div className="zoom-effect-container">
          <div className="image-card">
            <img src="https://i.imgur.com/W6fj9u5.jpg" />
          </div>
        </div>
      </Link>
      <Link to="/project/TravelAgency" style={{ textDecoration: "none" }}>
        <div className="zoom-effect-container">
          <div className="image-card">
            <img src="https://i.imgur.com/zii3cvb.jpg" />
          </div>
        </div>
      </Link>
      <Link to="/project/FilmOst">
        <div className="zoom-effect-container">
          <div className="image-card">
            <img src="https://i.imgur.com/dLd0yON.jpg" />
          </div>
        </div>
      </Link>
    </div>
  );
}
