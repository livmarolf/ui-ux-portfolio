// TODO : Figure out the about page situation >:(
// TODO : after update of resume create a qr code
// TODO : add media queries
// TODO : streamline image importing

import { Link } from "react-router-dom";
import olivia from "../assets/images/olivia-cropped.png";
import curriculumPages from "../assets/images/curriuclum-pages.png";
import processTablets from "../assets/prototypes/process-tablets.png";
import huddleupPhones from "../assets/prototypes/huddleup-phones.png";
import rprePrototypes from "../assets/prototypes/rpre-prototypes.png";
import sLines from "../assets/dark/lines-s.png";

export default function Landing() {
  return (
    <div className="landing-container">
      <div className="header-row">
        <div className="title-container">
          <div className="title">
            <h1>I'M LIV</h1>
            <h2>- UI/UX DESIGNER</h2>
          </div>

          <p>2024</p>
        </div>
      </div>

      <div className="landing-content">
        <div className="left-lines">
          <img src={sLines} alt="small-lines" />
        </div>

        <div className="landing-rows">
          <div className="intro-row">
            <div className="column-left">
              <div className="info">
                <div className="rotated-div">
                  <h3>INTRODUCTION</h3>
                </div>

                <p>
                  As a <strong>UX/UI designer</strong> with a{" "}
                  <strong>software development background</strong>, I combine my
                  eye for <strong>clean design</strong> with practical expertise
                  to create intuitive digital experiences. My journey from
                  software development to design enriches my ability to{" "}
                  <strong>bridge user needs</strong> with elegant, functional
                  solutions.
                </p>
              </div>

              <div className="info">
                <div className="rotated-div">
                  <h3>DOWNLOAD MY RESUME</h3>
                </div>
                <div className="qr-code"></div>
                {/* <img alt="qr-code" /> */}
              </div>
            </div>

            <Link className="link-wrapper" to="/about">
              <div className="image-container">
                <img src={olivia} alt="personal" />
                <p>CLICK TO VIEW</p>
              </div>
            </Link>
          </div>

          <div className="case-row">
            <div className="case-desc">
              <div className="rotated-div">
                <h3>CURRICULUM DESIGN</h3>
              </div>

              <div className="case-content">
                <h4>WEB DEVELOPMENT CURRICULUM DESIGN</h4>

                <p>
                  Creating a curriculum through practical design and planning
                  for effective learning outcomes.
                </p>
              </div>
            </div>

            <Link className="link-wrapper" to="/curriculum-design">
              <div className="image-container">
                <img src={curriculumPages} alt="curriculum-pages" />
                <p>CLICK TO VIEW</p>
              </div>
            </Link>
          </div>

          <div className="case-row">
            <div className="case-desc">
              <div className="rotated-div">
                <h3>DESIGN PROCESS</h3>
              </div>

              <div className="case-content">
                <h4>THE CREATIVE JOURNEY</h4>

                <p>
                  Creating a curriculum through practical design and planning
                  for effective learning outcomes.
                </p>
              </div>
            </div>

            <Link className="link-wrapper" to="/design-process">
              <div className="image-container">
                <img src={processTablets} alt="process-tablets" />
                <p>CLICK TO VIEW</p>
              </div>
            </Link>
          </div>

          <div className="case-row">
            <div className="case-desc">
              <div className="rotated-div">
                <h3>CASE STUDY 01</h3>
              </div>

              <div className="case-content">
                <h4>HUDDLEUP</h4>

                <p>
                  An application designed to enhance sports team management and
                  promote greater involvement.
                </p>
              </div>
            </div>

            <Link className="link-wrapper" to="/huddleup">
              <div className="image-container">
                <img src={huddleupPhones} alt="huddleup-phones" />
                <p>CLICK TO VIEW</p>
              </div>
            </Link>
          </div>

          <div className="case-row">
            <div className="case-desc">
              <div className="rotated-div">
                <h3>CASE STUDY 02</h3>
              </div>

              <div className="case-content">
                <h4>REAL ESTATE</h4>

                <p>
                  A tailored adaptive website design created for a real estate
                  professional.
                </p>
              </div>
            </div>

            <Link className="link-wrapper" to="/rpre">
              <div className="image-container">
                <img src={rprePrototypes} alt="rpre-prototypes" />
                <p>CLICK TO VIEW</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
