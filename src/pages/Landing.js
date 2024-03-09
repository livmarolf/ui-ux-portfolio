import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../assets/landing/arrow.svg";
import olivia from "../assets/landing/olivia-cropped.png";
import curriculumPages from "../assets/landing/curriuclum-pages.png";
import processTablets from "../assets/landing/process-tablets.png";
import huddleupPhones from "../assets/landing/huddleup-phones.png";
import rprePrototypes from "../assets/landing/rpre-screens.png";
import qrcode from "../assets/landing/pdf-qrcode.png";
import ParallaxText from "../components/ParallaxText";
import BounceElement from "../components/BounceElement";

export default function Landing() {
  return (
    <div className="landing-container">
      <div className="header-row">
        <div className="title-container">
          <div className="title">
            <p>Hello,</p>
            <h1>
              I'M <span>LIV</span>
            </h1>
            <p>
              As a UX/UI designer with a software development background, I
              combine my eye for clean design with practical expertise to create
              intuitive digital experiences.
            </p>
          </div>

          <div className="qrcode-container">
            <p>
              Scan to download my{" "}
              <a
                target="blank"
                href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:3ce121b0-1d8e-4383-918e-1d541df28522"
              >
                resume
              </a>
              .
            </p>

            <div className="qrcode">
              <img src={qrcode} alt="qrcode" />
            </div>
          </div>
        </div>
      </div>

      <div className="parallax">
        <ParallaxText baseVelocity={-5}>ui/ux designer</ParallaxText>
      </div>

      <div className="intro-section">
        <div className="image-container">
          <img src={olivia} alt="olivia" />
        </div>

        <div className="intro-content">
          <h2>GET TO KNOW ME</h2>

          <p>
            I have a strong passion for web design, finding genuine enjoyment in
            the creative process. It's become a central focus of my work,
            motivating me to continuously improve and excel in this field.
          </p>

          <div className="btn-container">
            {/* <button>learn more</button> */}
            <Link to="/contact">
              <button>let's talk</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="title-block">
          <div>
            <h1>case studies</h1>
            <Arrow />
          </div>
        </div>

        <Link to="/huddleup">
          <BounceElement type="div" className="case-block">
            <p>01</p>
            <h2>HUDDLEUP</h2>
            <img src={huddleupPhones} alt="huddleup-prototypes" />
            <p className="description">
              An application designed to enhance sports team management and
              promote greater involvement.
            </p>
          </BounceElement>
        </Link>

        <Link to="/rpre">
          <BounceElement type="div" className="case-block">
            <p>02</p>
            <h2>REAL PATREA REAL ESTATE</h2>
            <img src={rprePrototypes} alt="rpre-prototypes" />
            <p className="description">
              A tailored adaptive website design created for a real estate
              professional.
            </p>
          </BounceElement>
        </Link>
      </div>

      <div className="columns mobile">
        <Link to="/design-process">
          <BounceElement type="div" className="case-block">
            <p>01</p>
            <h2>DESIGN PROCESS</h2>
            <img src={processTablets} alt="process-tablets" />
            <p className="description">
              The outline and in-depth walkthrough of my design process from
              start to finish.
            </p>
          </BounceElement>
        </Link>

        <Link to="curriculum-design">
          <BounceElement type="div" className="case-block">
            <p>02</p>
            <h2>CURRICULUM DESIGN</h2>
            <img src={curriculumPages} alt="curriculum-pages" />
            <p className="description">
              Creating a curriculum through practical design and planning for
              effective learning outcomes.
            </p>
          </BounceElement>
        </Link>

        <div className="bottom-title-block">
          <div>
            <h1>explore futher</h1>
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
}
