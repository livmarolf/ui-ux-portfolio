import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "../layouts/Navbar";
import ParallaxText from "../components/ParallaxText";

function ProgressCircle() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
      <motion.circle
        cx="50"
        cy="50"
        r="30"
        pathLength="1"
        className="indicator"
        style={{ pathLength: scaleX }}
      />
    </svg>
  );
}

export default function Landing() {
  return (
    <div className="landing-container">
      <ProgressCircle />
      <Navbar />

      <div className="title-container">
        <div className="left">
          <div className="name-block">
            <h1>OLIVIA</h1>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10.5"
                cy="10.5"
                r="9.5"
                stroke="#7E7E7E"
                strokeWidth="2"
              />
              <path
                d="M12.34 4V17.2H10.12V6.52L7.02 8.52L6 6.86L10.3 4H12.34Z"
                fill="#7E7E7E"
              />
            </svg>
          </div>

          <div className="name-block">
            <h1>UI/UX DESIGNER</h1>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10.5"
                cy="10.5"
                r="9.5"
                stroke="#7E7E7E"
                strokeWidth="2"
              />
              <path
                d="M7.12844 4.56305C8.26605 4.18768 9.51376 4 10.8716 4C12.2294 4 13.2141 4.2522 13.8257 4.7566C14.4495 5.24927 14.7615 6.03519 14.7615 7.11437C14.7615 7.58358 14.6636 8.00586 14.4679 8.38123C14.2844 8.7566 14.0948 9.03226 13.8991 9.20821C13.7034 9.37243 13.4587 9.54839 13.1651 9.73607C13.8135 10.0293 14.2783 10.3519 14.5596 10.7038C14.8532 11.044 15 11.6012 15 12.3754C15 13.607 14.6758 14.522 14.0275 15.1202C13.3914 15.7067 12.37 16 10.9633 16C10.4128 16 9.80734 15.9531 9.14679 15.8592C8.48624 15.7771 7.96024 15.6891 7.56881 15.5953L7 15.4545L7.12844 13.9413C8.47401 14.176 9.66055 14.2933 10.6881 14.2933C12.156 14.2815 12.8899 13.6598 12.8899 12.4282C12.8899 11.8651 12.7003 11.437 12.3211 11.1437C11.9419 10.8504 11.4404 10.6979 10.8165 10.6862H8.37615V9.04985H10.8165C11.2691 9.04985 11.685 8.8739 12.0642 8.52199C12.4557 8.15836 12.6514 7.72434 12.6514 7.21994C12.6514 6.70381 12.4801 6.32258 12.1376 6.07625C11.8073 5.82991 11.3486 5.70674 10.7615 5.70674C9.79511 5.70674 8.79816 5.78886 7.77064 5.95308L7.29358 6.04106L7.12844 4.56305Z"
                fill="#7E7E7E"
              />
            </svg>
            <p>© OLIVIA MAROLF</p>
          </div>
        </div>

        <div className="right">
          <div className="name-block">
            <h1>MAROLF</h1>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10.5"
                cy="10.5"
                r="9.5"
                stroke="#7E7E7E"
                strokeWidth="2"
              />
              <path
                d="M15 16H7V14.301L10.0682 11.2966C10.9969 10.3905 11.6494 9.68107 12.0259 9.1684C12.4024 8.65574 12.5906 8.09538 12.5906 7.48733C12.5906 6.86736 12.4086 6.42623 12.0447 6.16393C11.6808 5.90164 11.0847 5.77049 10.2565 5.77049C9.47843 5.77049 8.61882 5.85395 7.67765 6.02086L7.20706 6.0924L7.07529 4.51863C8.29255 4.17288 9.55373 4 10.8588 4C13.4565 4 14.7553 5.09687 14.7553 7.29061C14.7553 8.14903 14.5545 8.89419 14.1529 9.52608C13.7639 10.158 13.0612 10.921 12.0447 11.8152L9.39059 14.2653H15V16Z"
                fill="#7E7E7E"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="case-card">
        <div className="left">
          <div className="image-container"></div>
          <div className="description">
            <h1>ZERO</h1>
            <p>WEB DESIGN • DEVELOPMENT</p>
          </div>
        </div>
        <div className="right"></div>
      </div>

      <div className="case-card">
        <div className="left">
          <div className="image-container"></div>
          <div className="description">
            <h1>ZERO</h1>
            <p>WEB DESIGN • DEVELOPMENT</p>
          </div>
        </div>
        <div className="right"></div>
      </div>

      <div className="case-card">
        <div className="left">
          <div className="image-container"></div>
          <div className="description">
            <h1>ZERO</h1>
            <p>WEB DESIGN • DEVELOPMENT</p>
          </div>
        </div>
        <div className="right"></div>
      </div>

      <div className="case-card">
        <div className="left">
          <div className="image-container"></div>
          <div className="description">
            <h1>ZERO</h1>
            <p>WEB DESIGN • DEVELOPMENT</p>
          </div>
        </div>
        <div className="right"></div>
      </div>

      <div className="about-container">
        <div className="left">
          <p>ABOUT OLIVIA</p>

          <p className="large-text">
            Product designer, specializing in crafting user-friendly products
            and brands with expertise in 3D Rendering, Motion Design, Product
            design, Prototyping and Front-end
          </p>
          <p className="large-text">
            Crafting seamless user and brand experiences, adeptly collaborating
            with development teams and stakeholders to tackle design challenges
            and maintain consistency across platforms.
          </p>

          <p>2024</p>
        </div>

        <div className="right">
          <p>PREVIOUS EXPERIENCE</p>

          <div className="experience-grid">
            <div className="row">
              <p>FREELANCE</p>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8783 17.931L21.1702 9.83765L13.0769 10.5457"
                  stroke="white"
                  stroke-width="0.8"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8319 22.1626L21.0703 9.96094"
                  stroke="white"
                  stroke-width="0.8"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>2022-2024</div>
            </div>
            <div className="row">
              <p>DEVPIPELINE</p>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8783 17.931L21.1702 9.83765L13.0769 10.5457"
                  stroke="white"
                  stroke-width="0.8"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8319 22.1626L21.0703 9.96094"
                  stroke="white"
                  stroke-width="0.8"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>2022-2024</div>
            </div>
            <div className="row">
              <p>KELLER WILLIAMS</p>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8783 17.931L21.1702 9.83765L13.0769 10.5457"
                  stroke="white"
                  stroke-width="0.8"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8319 22.1626L21.0703 9.96094"
                  stroke="white"
                  stroke-width="0.8"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>2022-2024</div>
            </div>
          </div>
        </div>
      </div>

      <div className="tools">
        <div className="left">
          <p>TOOLS AND TECHNOLOGIES</p>

          <div className="parallax">
            <ParallaxText baseVelocity={-1}>
              REACT.JS FRAMER FIGMA SKETCH ADOBE
            </ParallaxText>
          </div>
        </div>
        <div className="right">
          <p>DESIGN & DEVELOPMENT</p>
        </div>
      </div>

      <div className="skills">
        <div className="left">
          <div className="heading">
            <h1>UI/UX DESIGN</h1>
            <p>01</p>
          </div>

          <div className="skills-grid">
            <div>
              <p>USER TESTING</p>•
            </div>
            <div>
              <p>PROTOTYPING</p>•
            </div>
            <div>
              <p>RESEARCH</p>•
            </div>
            <div>
              <p>WIREFRAMING</p>•
            </div>
            <div>
              <p>FIGMA</p>•
            </div>
            <div>
              <p>FRAMER</p>•
            </div>
            <div>
              <p>ADOBE XD</p>•
            </div>
            <div>
              <p>ADOBE ILLUSTRATOR</p>•
            </div>
          </div>
        </div>
        <div className="right">
          <div className="heading">
            <h1>SOFTWARE DEVELOPMENT</h1>
            <p>02</p>
          </div>

          <div className="skills-grid">
            <div>
              <p>HTML</p>•
            </div>
            <div>
              <p>CSS</p>•
            </div>
            <div>
              <p>SCSS</p>•
            </div>
            <div>
              <p>REACT</p>•
            </div>
            <div>
              <p>JAVASCRIPT</p>•
            </div>
            <div>
              <p>FRAMER MOTION</p>•
            </div>
            <div>
              <p>PYTHON</p>•
            </div>
            <div>
              <p>SQL</p>•
            </div>
          </div>
        </div>
      </div>

      <div className="cta">
        <div className="heading">
          <h1>LET'S TALK</h1>
          <div className="btn-container">
            <button>CONTACT ME</button>
          </div>
        </div>

        <div className="columns">
          <div className="left">
            <div>
              <p>LINKEDIN</p>
              <p>@OLIVIAMAROLF</p>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8783 17.931L21.1702 9.83765L13.0769 10.5457"
                  stroke="white"
                  stroke-width="0.8"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8319 22.1626L21.0703 9.96094"
                  stroke="white"
                  stroke-width="0.8"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div>
              <p>GITHUB</p>
              <p>/OLIVIAMAROLF</p>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8783 17.931L21.1702 9.83765L13.0769 10.5457"
                  stroke="white"
                  stroke-width="0.8"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8319 22.1626L21.0703 9.96094"
                  stroke="white"
                  stroke-width="0.8"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div>
              <p>EMAIL</p>
              <p>LIVMAROLF@GMAIL.COM</p>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8783 17.931L21.1702 9.83765L13.0769 10.5457"
                  stroke="white"
                  stroke-width="0.8"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8319 22.1626L21.0703 9.96094"
                  stroke="white"
                  stroke-width="0.8"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="right">
            <div>
              <p>RESUME</p>
              <p>DOWNLOAD</p>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8783 17.931L21.1702 9.83765L13.0769 10.5457"
                  stroke="white"
                  stroke-width="0.8"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8319 22.1626L21.0703 9.96094"
                  stroke="white"
                  stroke-width="0.8"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div>
              <p>MOBILE</p>
              <p>(801) 885-8122</p>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8783 17.931L21.1702 9.83765L13.0769 10.5457"
                  stroke="white"
                  stroke-width="0.8"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8319 22.1626L21.0703 9.96094"
                  stroke="white"
                  stroke-width="0.8"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
