import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function FilmOst() {
  return (
    <div className="project-flex">
      <Nav />
      <div className="demo-container">
        {" "}
        <div className="project-naziv">
          <h1>Film Ost</h1>
        </div>
        <div className="project-opis">
          <h3>Great music from great movies.</h3>
        </div>
        <div className="technologies">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
          <img src="https://i.imgur.com/hOfoVm7.png" />
          <img src="https://i.imgur.com/H13wcS1.png" />
          <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/react-1-logo.png" />
          <div className="player">
            <img src="https://www.freepnglogos.com/uploads/google-play-png-logo/store-app-store-google-google-play-logo-play-png-logo-symbol-17.png" />{" "}
            react-player
          </div>
        </div>
        <div className="buttons">
          <a
            href="https://film-ost.herokuapp.com/"
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

          <div className="button" id="button-7">
            <div id="dub-arrow">
              <img
                src="https://image.flaticon.com/icons/svg/25/25231.svg"
                alt=""
              />
            </div>
            <a href="#">CODE</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
