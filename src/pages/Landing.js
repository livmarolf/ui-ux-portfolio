import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import headshot from "../assets/headshot.jpeg";
export default function Landing() {
  return (
    <div className="landing-page">
      <div className="main-section">
        <div className="title-content">
          <h1>
            <span>I'm Liv</span> &mdash; an enthusiastic UX/UI designer based in
            Salt Lake City, Utah.
          </h1>
        </div>
        <svg
          className="top-shapes"
          width="881"
          height="851"
          viewBox="0 0 881 851"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.8641 411.886C-81.0724 74.3859 199.566 82.7512 410.436 10.715C621.306 -61.3213 804.728 276.844 785.577 400.848C766.426 524.852 647.677 905.526 348.908 820.737C50.1387 735.948 126.801 749.385 22.8641 411.886Z"
            fill="#252426"
          />
          <path
            d="M92.1861 381.663C32.343 35.8318 307.926 79.5448 524.885 35.1831C741.845 -9.17848 879.957 347.354 845.422 467.173C810.887 586.992 645.767 947.24 361.962 825.901C78.1564 704.561 152.029 727.495 92.1861 381.663Z"
            fill="#282829"
          />
          <path
            d="M175.313 393.221C130.84 68.9803 386.247 118.692 589.896 84.4153C793.545 50.1385 910.612 386.901 874.512 497.439C838.412 607.978 672.754 938.328 412.221 816.006C151.687 693.683 219.785 717.462 175.313 393.221Z"
            fill="#2A2A2C"
          />
        </svg>
      </div>
      <div className="icon-strip">
        <p>YEAR</p>
        <FontAwesomeIcon icon={faArrowDown} className="arrow-down" />
        <div className="icons-right">
          <FontAwesomeIcon icon={faGithub} className="github" />
          <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
          <FontAwesomeIcon icon={faFilePdf} className="pdf" />
        </div>
      </div>
      <div className="landing-content">
        <div className="introduction">
          <h1>GET TO KNOW ME</h1>
          <div className="introduction-container">
            <img src={headshot} alt="headshot" />

            <div className="introduction-content">
              <div>
                <h6>INTRODUCTION &mdash;</h6>
                <p>
                  As a <strong>UX/UI designer</strong> with a{" "}
                  <strong>software development background</strong>, I combine my{" "}
                  <strong>eye for clean design</strong> with practical expertise
                  to create intuitive digital experiences. My journey from
                  software development to design enriches my ability to{" "}
                  <strong>bridge user needs</strong> with elegant,{" "}
                  <strong>functional solutions</strong>.
                </p>
              </div>
              <div>
                <button className="read-more-btn">Read More</button>
                <button>Contact</button>
              </div>
            </div>
          </div>
          <div className="arrow-down-container">
            <FontAwesomeIcon icon={faArrowDown} className="arrow-down" />
          </div>
        </div>
        <div className="process-container">
          <div>
            <h6>ABOUT MY PROCESS &mdash;</h6>
            <h2>My Design Process</h2>
            <p>
              The outline and in-depth walkthrough of my design process from
              start to finish.
            </p>
          </div>
          <div>
            <div>image placeholder</div>
          </div>
        </div>
        <div className="curriculum-container">
          <div>
            <h6>CURRICULUM DESIGN &mdash;</h6>
            <h2>JavaScript Curriculum Design</h2>
            <p>A blurb about curriculum design.</p>
          </div>
          <div>
            <div>image placeholder</div>
          </div>
        </div>
        <div className="huddleup-container">
          <div>
            <h6>UI/UX CASE STUDY 01 &mdash;</h6>
            <h2>HuddleUp</h2>
            <p>
              An application designed to enhance sports team management and
              promote greater involvement.
            </p>
          </div>
          <div>
            <div>image placeholder</div>
          </div>
        </div>
        <div className="rpre-container">
          <div>
            <h6>UI/UX CASE STUDY 02 &mdash;</h6>
            <h2>Revamping Real Estate</h2>
            <p>
              A tailored adaptive website design created for a real estate
              professional.
            </p>
          </div>
          <div>
            <div>image placeholder</div>
          </div>
        </div>
      </div>
    </div>
  );
}
