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
            <div className="arrow-down-transition">
              <FontAwesomeIcon icon={faArrowDown} className="arrow-down" />
            </div>
            <svg
              className="middle-shapes"
              width="829"
              height="1210"
              viewBox="0 0 829 1210"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M790.74 306.007C906.166 558.242 738.384 579.983 564.301 997.976C390.219 1415.97 7.91246 1137.64 45.9979 828.367C84.0833 519.092 -50.7108 413.729 272.437 136.398C595.585 -140.933 675.315 53.7729 790.74 306.007Z"
                fill="#252426"
              />
              <path
                d="M724.981 360.734C811.662 599.437 656.95 606.873 467.194 975.431C277.438 1343.99 -50.8496 1061.75 6.76864 782.341C64.3869 502.936 -50.8264 396.825 264.556 167.644C579.939 -61.5367 638.3 122.031 724.981 360.734Z"
                fill="#282829"
              />
              <path
                d="M661.435 376.578C744.473 589.841 605.24 599.745 441.913 935.725C278.586 1271.71 -23.0278 1024.22 23.0966 771.297C69.221 518.375 -36.7775 425.161 242.618 212.15C522.014 -0.86055 578.397 163.315 661.435 376.578Z"
                fill="#2A2A2C"
              />
            </svg>
            {/* <div className="arrow-down-transition">
              <FontAwesomeIcon icon={faArrowDown} className="arrow-down" />
            </div> */}
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
