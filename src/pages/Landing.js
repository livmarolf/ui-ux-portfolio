import { ReactComponent as ArrowCircleDown } from "../assets/icons/arrow-circle-down.svg";
import liv from "../assets/liv.JPG";

export default function Landing() {
  return (
    <div className="landing-container">
      <div className="header-row">
        <h1>I'M LIV</h1>
        <h2>- UI/UX DESIGNER</h2>
      </div>

      <div className="intro-row">
        <div className="image-container">
          <img src={liv} alt="personal" />
        </div>

        <div className="intro-content">
          <div>
            <h3>INTRODUCTION</h3>
            <p>
              As a UX/UI designer with a software development background, I
              combine my eye for clean design with practical expertise to create
              intuitive digital experiences. My journey from software
              development to design enriches my ability to bridge user needs
              with elegant, functional solutions.
            </p>
          </div>

          <div className="btn-container">
            <button>About</button>
            <button>Contact</button>
          </div>
        </div>
      </div>

      <div className="arrow-row">
        <ArrowCircleDown />
      </div>

      <div className="case-row">
        <div className="case-description">
          <h3>DESIGN PROCESS</h3>
          <h4>DESIGN PROCESS</h4>

          <p>
            The outline and in-depth walkthrough of my design process from start
            to finish.
          </p>
        </div>

        <div className="image-container">
          <img alt="" />
        </div>
      </div>

      <div className="arrow-row">
        <ArrowCircleDown />
      </div>

      <div className="case-row">
        <div className="case-description">
          <h3>CURRICULUM DESIGN</h3>
          <h4>CURRICULUM DESIGN</h4>

          <p>
            Creating a curriculum through practical design and planning for
            effective learning outcomes.
          </p>
        </div>

        <div className="image-container">
          <img alt="" />
        </div>
      </div>

      <div className="arrow-row">
        <ArrowCircleDown />
      </div>

      <div className="case-row">
        <div className="case-description">
          <h3>CASE STUDY 01</h3>
          <h4>HUDDLEUP</h4>

          <p>
            An application designed to enhance sports team management and
            promote greater involvement.
          </p>
        </div>

        <div className="image-container">
          <img alt="" />
        </div>
      </div>

      <div className="arrow-row">
        <ArrowCircleDown />
      </div>

      <div className="case-row">
        <div className="case-description">
          <h3>CASE STUDY 02</h3>
          <h4>REAL ESTATE</h4>

          <p>
            A tailored adaptive website design created for a real estate
            professional.
          </p>
        </div>

        <div className="image-container">
          <img alt="" />
        </div>
      </div>
    </div>
  );
}
