import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Design1() {
  return (
    <>
      <div className="project-flex">
        <Nav />
        <div className="demo-container-design">
          {" "}
          <div className="project-naziv">
            <h1>Design</h1>
          </div>
          <div className="project-opis">
            <h3>Find the best treatment for you.</h3>
          </div>
          <div className="design-images">
            <img src="https://i.imgur.com/fHbIdMO.png" />
            <img src="https://i.imgur.com/45nyPDE.png" />
            <div className="img-3">
            <img src="https://i.imgur.com/4EhfsyD.png" />
            </div>
            <img src="https://i.imgur.com/69ankJ7.png" />
            <img src="https://i.imgur.com/3yWNCck.png" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
