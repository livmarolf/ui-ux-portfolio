import { ReactComponent as ArrowCircleDown } from "../assets/icons/arrow-circle-down.svg";

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="landing-container">
        <div className="header-row">
          <h1>I'M LIV</h1>
          <h2>- UI/UX DESIGNER</h2>
        </div>

        <div className="intro-row">
          <div>
            <img />
          </div>

          <div>
            <div>
              <h3>INTRODUCTION</h3>
              <p>
                As a UX/UI designer with a software development background, I
                combine my eye for clean design with practical expertise to
                create intuitive digital experiences. My journey from software
                development to design enriches my ability to bridge user needs
                with elegant, functional solutions.
              </p>
            </div>

            <div>
              <button>About</button>
              <button>Contact</button>
            </div>
          </div>
        </div>

        <div className="arrow-row">
          <ArrowCircleDown />
        </div>

        <div className="case-row">
          <div>
            <h3>DESIGN PROCESS</h3>
            <h4>DESIGN PROCESS</h4>

            <p>
              The outline and in-depth walkthrough of my design process from
              start to finish.
            </p>
          </div>

          <div>
            <img />
          </div>
        </div>

        <div className="arrow-row">
          <ArrowCircleDown />
        </div>

        <div className="case-row">
          <div>
            <h3>CURRICULUM DESIGN</h3>
            <h4>CURRICULUM DESIGN</h4>

            <p>
              Creating a curriculum through practical design and planning for
              effective learning outcomes.
            </p>
          </div>

          <div>
            <img />
          </div>
        </div>

        <div className="arrow-row">
          <ArrowCircleDown />
        </div>

        <div className="case-row">
          <div>
            <h3>CASE STUDY 01</h3>
            <h4>HUDDLEUP</h4>

            <p>
              An application designed to enhance sports team management and
              promote greater involvement.
            </p>
          </div>

          <div>
            <img />
          </div>
        </div>

        <div className="arrow-row">
          <ArrowCircleDown />
        </div>

        <div className="case-row">
          <div>
            <h3>CASE STUDY 02</h3>
            <h4>REAL ESTATE</h4>

            <p>
              A tailored adaptive website design created for a real estate
              professional.
            </p>
          </div>

          <div>
            <img />
          </div>
        </div>
      </div>
    </div>
  );
}
