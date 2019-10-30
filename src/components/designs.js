import React from "react";
import { Link } from "react-router-dom";

export default function Designs() {
  return (
    <div className="wrapper">
      <Link to="/design-1" style={{ textDecoration: "none" }}>
        {" "}
        <div className="zoom-effect-container">
          <div className="image-card">
            <img src="https://assets-global.website-files.com/55e67eeba2e73cb76514f165/5987c18399d894000124c2e8_Master%20Web%20Design%20.png" />
          </div>
        </div>
      </Link>
      <Link to="/design-2" style={{ textDecoration: "none" }}>
        <div className="zoom-effect-container">
          <div className="image-card">
            <img src="https://assets-global.website-files.com/55e67eeba2e73cb76514f165/5987c18399d894000124c2e8_Master%20Web%20Design%20.png" />
          </div>
        </div>
      </Link>
    </div>
  );
}
