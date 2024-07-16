import tvSolution from "../assets/images/tv-solution.webp";
import desktopSolution from "../assets/images/desktop-solution.webp";
import disneyHero from "../assets/images/disney-hero.png";
import Accordion from "../components/Accordion";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import { Link } from "react-router-dom";

const tvAccordionData = [
  {
    id: 0,
    label: "IDENTIFY BUTTON PRESS",
    renderContent: () => {
      return <p>Detect the back button press event on the remote</p>;
    },
  },
  {
    id: 1,
    label: "DETERMINE CONTEXT",
    renderContent: () => {
      return (
        <>
          <p>
            If the user is within the movies list (scrolled down), a single
            press should smoothly scroll the page to the top
          </p>
          <p>
            If already at the top, the next press should navigate back to the
            previous page
          </p>
        </>
      );
    },
  },
  {
    id: 2,
    label: "FEEDBACK MECHANISM",
    renderContent: () => {
      return (
        <p>
          Provide a brief on-screen message or animation indicating the action
          taken (e.g., "Returning to top")
        </p>
      );
    },
  },
];

const desktopAccordionData = [
  {
    id: 0,
    label: "CSS STYLING",
    renderContent: () => {
      return (
        <p>
          Use CSS to make the filter bar sticky. This ensures it remains in the
          viewport as the user scrolls
        </p>
      );
    },
  },
  {
    id: 1,
    label: "USER EXPERIENCE",
    renderContent: () => {
      return (
        <>
          <p>
            Test the sticky filter to ensure it doesn't obstruct content or
            interfere with the browsing experience
          </p>
        </>
      );
    },
  },
];

export default function DisneyPlus() {
  return (
    <div className="case-container">
      <div className="title">
        <h1>Improving Disney Plus Movie Filters</h1>
      </div>

      <div className="intro-container">
        <div className="intro">
          <div className="header">
            <h1>Introduction</h1>
            <p>01</p>
          </div>
          <div>
            <p>
              Disney Plus offers a vast library of movies, but users encounter a
              significant usability issue on the "Movies" page. The filter
              option, essential for refining movie choices, is positioned at the
              top of the page and disappears as users scroll down. This
              necessitates scrolling back up to access the filter, creating a
              frustrating experience, especially on TV where navigation requires
              multiple clicks.
            </p>
          </div>
        </div>
        <div className="intro">
          <div className="header">
            <h1>Problem Statement</h1>
            <p>02</p>
          </div>
          <div>
            <p>
              The movies filter at the top of the page disappears when
              scrolling, making it inconvenient for users to change filter
              preferences. When using the desktop version, users must scroll
              back to the top, potentially scrolling through numerous movies.
              When on the TV users need to click the up arrow multiple times,
              proportional to the number of rows, to reach the filter. This is
              particularly cumbersome and interrupts the viewing experience.
            </p>
          </div>
        </div>
      </div>

      <div className="problem-statement-img">
        <div className="img-container">
          <img src={disneyHero} alt="disney-hero" />

          <div className="overlay-text">
            <p>
              The image shows the current desktop design where users, once they
              start scrolling through movies, lose access to the filter. This
              illustrates the difficulty they face in adjusting their
              preferences later on
            </p>
          </div>
        </div>
      </div>

      <div className="solution">
        <div className="header">
          <h1>TV Solution</h1>
          <button>View Desktop Solution</button>
        </div>

        <div className="img-container">
          <img src={tvSolution} alt="tv-solution" />

          <div className="overlay-text">
            <p>
              The image depicts the functionality where a single press of the
              back button automatically scrolls the user to the top of the page.
              From there, another press of the back button routes the user to
              the previous page
            </p>
          </div>
        </div>

        <div className="implementation-container">
          <div>
            <p className="sm-header">IMPLEMENTATION DETAILS</p>
            <p className="large-font">
              To enhance navigation on Disney Plus for TV users, I propose using
              the remote's back button to quickly return to the top of the page,
              making the filter options easily accessible without excessive
              scrolling.
            </p>
          </div>

          <div>
            <p className="sm-header">IMPLEMENTATION STEPS</p>
            <Accordion items={tvAccordionData} keepOthersOpen={true} />
          </div>
        </div>

        <div className="user-flow-container">
          <h1>USER FLOW</h1>

          <div className="flow-lists">
            <div className="flow-list">
              <div className="list-header">
                <p>Initial Navigation</p>
                <p>01</p>
              </div>
              <div className="list">
                <div className="row">
                  <p>Identify the target audience</p>
                  <p>[•]</p>
                </div>

                <div className="row">
                  <p>Filters are visible and available at the top</p>
                  <p>[•]</p>
                </div>
              </div>
            </div>

            <div className="flow-list">
              <div className="list-header">
                <p>Scrolling Down</p>
                <p>02</p>
              </div>
              <div className="list">
                <div className="row">
                  <p>User scrolls through the list of movies</p>
                  <p>[•]</p>
                </div>

                <div className="row">
                  <p>User needs to change filter preferences</p>
                  <p>[•]</p>
                </div>
              </div>
            </div>

            <div className="flow-list">
              <div className="list-header">
                <p>Accessing Filters</p>
                <p>03</p>
              </div>
              <div className="list">
                <div className="row">
                  <p>User presses the back button once</p>
                  <p>[•]</p>
                </div>

                <div className="row">
                  <p>Page scrolls to the top, making filters visible again</p>
                  <p>[•]</p>
                </div>

                <div className="row">
                  <p>User adjusts filter preferences</p>
                  <p>[•]</p>
                </div>
              </div>
            </div>

            <div className="flow-list">
              <div className="list-header">
                <p>Previous Page</p>
                <p>04</p>
              </div>
              <div className="list">
                <div className="row">
                  <p>User presses back button again (from the top)</p>
                  <p>[•]</p>
                </div>

                <div className="row">
                  <p>user is navigated to the previous page</p>
                  <p>[•]</p>
                </div>

                <div className="row">
                  <p>User can now view previous page</p>
                  <p>[•]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="solution">
        <div className="header">
          <h1>Desktop Solution</h1>
          <button>View TV Solution</button>
        </div>

        <div className="img-container">
          <img src={desktopSolution} alt="tv-solution" />

          <div className="overlay-text">
            <p>
              The image depicts the functionality where the filter bar remains
              visible at the top of the screen as the user scrolls down the
              page. This ensures that users can access filter options at any
              time without needing to scroll back to the top
            </p>
          </div>
        </div>

        <div className="implementation-container">
          <div>
            <p className="sm-header">IMPLEMENTATION DETAILS</p>
            <p className="large-font">
              For the Disney Plus desktop platform, I propose a sticky filter
              bar that remains visible as users scroll, ensuring filter options
              are always accessible for a smoother browsing experience.
            </p>
          </div>

          <div>
            <p className="sm-header">IMPLEMENTATION STEPS</p>
            <Accordion items={desktopAccordionData} keepOthersOpen={true} />
          </div>
        </div>

        <div className="user-flow-container">
          <h1>USER FLOW</h1>

          <div className="flow-lists">
            <div className="flow-list">
              <div className="list-header">
                <p>Initial Navigation</p>
                <p>01</p>
              </div>
              <div className="list">
                <div className="row">
                  <p>User navigates to the "Movies" page</p>
                  <p>[•]</p>
                </div>

                <div className="row">
                  <p>Filters are visible and available below the navbar</p>
                  <p>[•]</p>
                </div>
              </div>
            </div>

            <div className="flow-list">
              <div className="list-header">
                <p>Scrolling Down</p>
                <p>02</p>
              </div>
              <div className="list">
                <div className="row">
                  <p>User scrolls through the list of movies</p>
                  <p>[•]</p>
                </div>

                <div className="row">
                  <p>The filter remains visible below the navbar</p>
                  <p>[•]</p>
                </div>
              </div>
            </div>

            <div className="flow-list">
              <div className="list-header">
                <p>Accessing Filters</p>
                <p>03</p>
              </div>
              <div className="list">
                <div className="row">
                  <p>User can adjust filter preferences at any point</p>
                  <p>[•]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="conclusion-container">
        <div className="intro">
          <div className="header">
            <h1>Benefits</h1>
            <p>01</p>
          </div>
          <div>
            <p>
              Improved usability allows users to quickly access filters without
              excessive scrolling. Enhanced navigation simplifies interaction on
              TV by reducing the number of clicks needed, while consistency
              maintains the expected functionality of the back button for
              navigation. Persistent access ensures filters are always
              accessible on desktop, improving the overall browsing experience.
            </p>
          </div>
        </div>
        <div className="intro">
          <div className="header">
            <h1>Conclusion</h1>
            <p>02</p>
          </div>
          <div>
            <p>
              By modifying the functionality of the back button on TV to serve
              dual purposes and implementing a sticky filter on desktop, Disney
              Plus can significantly enhance the user experience. These
              solutions provide a more intuitive and efficient way to navigate
              and interact with the movies page, aligning with user expectations
              and improving overall satisfaction.
            </p>
          </div>
        </div>
      </div>

      <div className="cta">
        <div className="heading">
          <h1>THANKS FOR READING</h1>

          <div className="btn-container">
            <Link to="/contact">
              <button>CONTACT ME</button>
            </Link>
            <Link to="/">
              <button>CASE STUDIES</button>
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
