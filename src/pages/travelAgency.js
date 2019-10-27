import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function TravelAgency() {
  return (
    <div className="project-flex">
      <Nav />
      <div className="demo-container">
        {" "}
        <div className="project-naziv">
          <h1>Travel Agency</h1>
        </div>
        <div className="project-opis">
          <h3>Explore the World with us.</h3>
        </div>
        <div className="technologies">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
          <img src="https://i.imgur.com/hOfoVm7.png" />
          <img src="https://i.imgur.com/H13wcS1.png" />
          <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/react-1-logo.png" />
          <div className="large">
            <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png" />

            <img src="https://www.computing.co.uk/w-images/0ce3b37e-d2cf-4f7e-93f0-da4629a43a61/1/mongologo-580x358.png" />

            <img src="https://expressjs.com/images/express-facebook-share.png" />

            <img src="https://i2.wp.com/community.nodemailer.com/wp-content/uploads/2015/10/n2-2.png?resize=422%2C360&ssl=1" />

            <img src="https://gitlab.com/uploads/-/system/project/avatar/4360092/material-ui.png" />

            <img src="https://miro.medium.com/max/3332/0*ok6yuDnTx4o2PSFx.png" />

            <img src="https://vectorlogoseek.com/wp-content/uploads/2019/04/axios-vector-logo.png" />
          </div>
        </div>
        <div className="buttons">
          <a
            href="https://sleepy-sierra-35624.herokuapp.com/"
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
