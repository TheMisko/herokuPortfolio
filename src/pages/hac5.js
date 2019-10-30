import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Hac5() {
  return (
    <div className="project-flex">
      <Nav />
      <div className="demo-container">
        {" "}
        <div className="project-naziv">
          <h1>HAC5</h1>
        </div>
        <div className="project-opis">
          <h3>Retro minimalistic news App.</h3>
        </div>
        <div className="technologies">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
          <img src="https://i.imgur.com/hOfoVm7.png" />
          <img src="https://i.imgur.com/H13wcS1.png" />
          <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/react-1-logo.png" />
          <img src="https://newsapi.org/images/n-logo-border.png" />
        </div>
        <div className="buttons">
          <a
            href="https://hac5.herokuapp.com/"
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
            href="https://github.com/TheMisko/hac5"
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
