import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function OneFrame() {
  return (
    <div className="project-flex">
      <Nav />
      <div className="demo-container">
        {" "}
        <div className="project-naziv">
          <h1>One Frame</h1>
        </div>
        <div className="project-opis">
          <h3>Find the Art that inspired your favourite movies. </h3>
        </div>
        <div className="technologies">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
          <img src="https://i.imgur.com/hOfoVm7.png" />
          <img src="https://i.imgur.com/H13wcS1.png" />
          <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/react-1-logo.png" />
          <img src="https://www.themoviedb.org/assets/2/v4/logos/208x226-stacked-green-9484383bd9853615c113f020def5cbe27f6d08a84ff834f41371f223ebad4a3c.png" />
        </div>
        <div className="buttons">
          <a
            href="https://one-framev2.herokuapp.com/"
            style={{ textDecoration: "none" }}
          >
            <div className="button" id="button-7">
              <div id="dub-arrow">
                <img
                  src="https://cdn.freebiesupply.com/logos/thumbs/2x/heroku-logo.png"
                  alt=""
                />
              </div>
              <a>LIVE DEMO</a>
            </div>
          </a>
          <a
            href="https://github.com/TheMisko/oneFramev2"
            style={{ textDecoration: "none" }}
          >
            <div className="button" id="button-7">
              <div id="dub-arrow">
                <img
                  src="https://image.flaticon.com/icons/svg/25/25231.svg"
                  alt=""
                />
              </div>
              <a href="#">CODE</a>
            </div>
          </a>
        </div>
        <div className="load">
          <div className="load1">It may take up to 2 minutes</div>
          <div className="load2"> to load the app</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
