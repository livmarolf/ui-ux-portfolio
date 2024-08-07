import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import ParallaxText from "../components/motion/ParallaxText";
import Paragraph from "../components/motion/Paragraph";
import { pageData } from "../data/CaseStudies";
import AnimatedCharacters from "../components/motion/AnimatedCharacters";
import CaseCard from "../components/CaseCard";

export default function Landing() {
  const paragraph = `
With experience in software development and a focus on UI/UX design, I bring a passion for blending technology and design seamlessly. From crafting intuitive user interfaces to architecting robust software systems, my diverse skill set allows me to create engaging digital experiences that prioritize both form and function.
`;

  return (
    <div className="landing-container">
      <div className="title-container">
        <div className="first-last">
          <div>
            <div className="name-block">
              <AnimatedCharacters text={"OLIVIA"} delayFactor={0} />

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
          </div>

          <div>
            <div className="name-block">
              <AnimatedCharacters text={"MAROLF"} delayFactor={0.48} />

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

        <div className="profession">
          <div className="name-block">
            <AnimatedCharacters text={"UI/UX"} delayFactor={0.96} />

            <div className="couple">
              <AnimatedCharacters text={"DESIGNER"} delayFactor={1.44} />

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
            </div>
            <p>©2024</p>
          </div>
        </div>
      </div>

      <div className="case-card-container">
        <div className="columns">
          <CaseCard
            title={"REAL PATREA"}
            description={"WEB DESIGN • CASE STUDY"}
            imgPath={pageData.rpre.cover}
            slug={pageData.rpre.slug}
            count={"01"}
          />

          <CaseCard
            title={"HUDDLEUP"}
            description={"WEB DESIGN • CASE STUDY"}
            imgPath={pageData.huddleup.cover}
            slug={pageData.huddleup.slug}
            count={"02"}
          />

          <CaseCard
            title={"DISNEY PLUS"}
            description={"RE-DESIGN • CASE STUDY"}
            imgPath={pageData.disneyPlus.cover}
            slug={pageData.disneyPlus.slug}
            count={"03"}
          />
        </div>
      </div>

      <div className="about-container">
        <div className="left">
          <p className="header">ABOUT OLIVIA</p>

          <div>
            <Paragraph paragraph={paragraph} />
          </div>

          <p className="header">2024</p>
        </div>

        <div className="right">
          <p>PREVIOUS EXPERIENCE</p>

          <div className="experience-grid">
            <div className="row">
              <p>FREELANCE</p>
              <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:4c292ec3-b859-4668-b4d3-17b346f4e3d5"
                target="_blank"
                rel="noreferrer"
              >
                <Arrow />
              </a>
              <p className="date">FREELANCE</p>
            </div>
            <div className="row">
              <p>UI/UX DESIGNER</p>
              <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:4c292ec3-b859-4668-b4d3-17b346f4e3d5"
                target="_blank"
                rel="noreferrer"
              >
                <Arrow />
              </a>
              <p className="date">DEVPIPELINE</p>
            </div>
            <div className="row">
              <p>WEB DEVELOPER</p>
              <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:4c292ec3-b859-4668-b4d3-17b346f4e3d5"
                target="_blank"
                rel="noreferrer"
              >
                <Arrow />
              </a>
              <p className="date">DEVPIPELINE</p>
            </div>
            <div className="row">
              <p>EDUCATOR</p>
              <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:4c292ec3-b859-4668-b4d3-17b346f4e3d5"
                target="_blank"
                rel="noreferrer"
              >
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
              </a>
              <p className="date">DEVPIPELINE</p>
            </div>
            <div className="row">
              <p>UI/UX DESIGNER</p>
              <a
                href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:4c292ec3-b859-4668-b4d3-17b346f4e3d5"
                target="_blank"
                rel="noreferrer"
              >
                <Arrow />
              </a>
              <p className="date">KW REALTY</p>
            </div>
          </div>
        </div>
      </div>

      <div className="tools">
        <div className="headings">
          <p>TOOLS AND TECHNOLOGIES</p>
          <p>DESIGN & DEVELOPMENT</p>
        </div>

        <div className="parallax">
          <ParallaxText baseVelocity={-1} whitespace={5}>
            REACT FRAMER FIGMA SKETCH ADOBE
          </ParallaxText>
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
          <h1>DROP ME A LINE</h1>
          <div className="btn-container">
            <Link to="/contact">
              <button>CONTACT ME</button>
            </Link>
          </div>
        </div>

        <div className="columns">
          <div className="left">
            <a
              href="https://www.linkedin.com/in/oliviamarolf/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <p>LINKEDIN</p>
                <p className="handle">/IN/OLIVIAMAROLF</p>
                <Arrow />
              </div>
            </a>

            <a
              href="https://github.com/livmarolf"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <p>GITHUB</p>
                <p className="handle">/LIVMAROLF</p>
                <Arrow />
              </div>
            </a>

            <a
              href="mailto:livmarolf@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <p>EMAIL</p>
                <p className="handle">LIVMAROLF@GMAIL.COM</p>
                <Arrow />
              </div>
            </a>
          </div>

          <div className="right">
            <a
              href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:d43b8060-d87c-42d6-b97d-6e0b8a6d30bf"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <p>RESUME</p>
                <p className="handle">VIEW/DOWNLOAD</p>
                <Arrow />
              </div>
            </a>

            <a href="tel:+8018858122" target="_blank" rel="noreferrer">
              <div>
                <p>MOBILE</p>
                <p className="handle">(801) 885-8122</p>
                <Arrow />
              </div>
            </a>

            <a
              href="https://www.figma.com/@livmarolf"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <p>FIGMA</p>
                <p className="handle">@LIVMAROLF</p>
                <Arrow />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
