import React, { useState } from "react";
import { Transition } from "react-transition-group";
import Nav from "../components/nav";
import ProjectsDisplay from "../components/projects-display";
import Footer from "../components/footer";
import TransitionComponent from "../components/transition";
import Designs from "../components/designs";

const duration = 700;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

export default function Home() {
  const [inProp, setInProp] = useState(true);
  const [show, setShow] = useState(false);

  const web = () => {
    setInProp(true);
    setShow(false);
  };

  const design = () => {
    setShow(true);
    setInProp(false);
  };
  return (
    <div>
      <Nav />
      <div className="img-container">
        {/* <div className="hello">HELLO WORLD!</div> */}

        <img src="https://i.imgur.com/j8EXLZL.jpg" />
      </div>
      <div className="home-btns">
        <div className="Container">
          <button onClick={web} className="btn-1">
            <span>WEB APPS</span>
          </button>
        </div>
        <div className="Container">
          <button onClick={design} className="btn-1">
            <span>DESIGN</span>
          </button>
        </div>
      </div>

      <Transition in={inProp} timeout={duration}>
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            <div className="show">
              {" "}
              <ProjectsDisplay />
            </div>
          </div>
        )}
      </Transition>
      {show ? (
        <Transition in={show} timeout={duration}>
          {state => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <div className="show">
                {" "}
                <Designs />
              </div>
            </div>
          )}
        </Transition>
      ) : null}

    
<div className="footer-home"><Footer /></div>
      
    </div>
  );
}
