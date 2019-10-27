import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div className="project-flex">
      <Nav />
      <div className="demo-container">
        <div className="contact-container">
          <div className="contact-flex">
            <img src="https://img.icons8.com/pastel-glyph/2x/person-male.png" />
            <h2>Name:</h2> <h3>Miodrag Milovanovic</h3>
          </div>
          <div className="contact-flex">
            <img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/mail-512.png" />
            <h2>E-mail:</h2> <h3>misko.199613@gmail.com</h3>
          </div>
          <div className="contact-flex">
            <img src="https://cdn3.iconfinder.com/data/icons/devices-57/100/Smartphone-512.png" />
            <h2>Mobile:</h2> <h3>069/572/898/2</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
