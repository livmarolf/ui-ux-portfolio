import designProcess from "../assets/common/design-process.png";
import { ReactComponent as ChartSuccess } from "../assets/icons/chart-success.svg";
import { ReactComponent as FatRows } from "../assets/icons/fatrows.svg";
import { ReactComponent as Routing } from "../assets/icons/routing.svg";

export default function DesignProcess() {
  return (
    <div className="process-page">
      <div className="header-row">
        <div className="title-container">
          <div className="title">
            <h1>DESIGN PROCESS</h1>
          </div>
        </div>
      </div>
      <div className="page-container">
        <div className="content-row">
          <div>
            <h2>INTRODUCTION</h2>
          </div>

          <div className="row-container">
            <div>
              <h3>CONCEPT</h3>
              <p>
                The forthcoming process embodies my individual approach to UX
                design, one that I consistently apply to each UX project I take
                on. This design methodology has evolved and matured over time
                through my experience in the field.
              </p>
            </div>

            <div>
              <h3>IDEOLOGY</h3>
              <p>
                User experience (UX) design is far from a single-step task,
                extending well beyond the act of simply opening a laptop and
                creating wireframes!
              </p>
            </div>
          </div>
        </div>

        <div className="content-row">
          <div>
            <h2>DESIGN PROCESS OVERVIEW</h2>
          </div>

          <div>
            <img src={designProcess} alt="design-process" />
          </div>
        </div>

        <div className="content-row">
          <div>
            <h2>RESEARCH</h2>
          </div>

          <div className="column-container">
            <div>
              <h3>PEOPLE/USERS</h3>

              <ul>
                <li>
                  <h4>User Interviews</h4>
                  <p>Interview with the product’s users/audience</p>
                </li>

                <li>
                  <h4>Surveys</h4>
                  <p>Questionnaires help gather qualitative data</p>
                </li>

                <li>
                  <h4>Personas</h4>
                  <p>Fictional characters that represent subsets of users</p>
                </li>
              </ul>
            </div>

            <div>
              <h3>BUSENESS</h3>

              <ul>
                <li>
                  <h4>Stakeholder Interviews</h4>
                  <p>Interviews with the client(s)</p>
                </li>

                <li>
                  <h4>Competitive Benchmarking</h4>
                  <p>Reviewing best practices from the competition</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-row">
          <div>
            <h2>STRATEGIZE</h2>
          </div>

          <div className="row-container">
            <p>
              Strategic design planning ensures efficiency by aligning tasks
              with clear objectives, incorporating user feedback, and
              maintaining consistency across design elements. This approach also
              helps in risk mitigation.
            </p>

            <div className="strategize-items">
              <div>
                <ChartSuccess />
                <h3>PRODUCT GOALS</h3>
                <p>
                  An outline defining specific objectives and targets of the
                  project
                </p>
              </div>

              <div>
                <Routing />
                <h3>PRODUCT ROADMAP</h3>
                <p>
                  A visual plan outlining product goals, features, and timeline
                </p>
              </div>

              <div>
                <FatRows />
                <h3>SITE MAP</h3>
                <p>
                  A visual depiction of the product's hierarchical content
                  structure
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-row">
          <div>
            <h2>DESIGN</h2>
          </div>

          <div className="row-container">
            <div className="design-intro">
              <p>
                This is when wireframes and prototypes are created, aiming for
                an intuitive and visually pleasing interface. Testing and
                feedback help refine the design for a user-friendly experience
                that meets project goals.
              </p>
            </div>

            <div className="design-items">
              <ul>
                <li>
                  <h4>User Flow</h4>
                  <p>A visual representation of a user's journey</p>
                </li>

                <li>
                  <h4>Wireframes</h4>
                  <p>Blueprints outlining a website or app's structure</p>
                </li>

                <li>
                  <h4>Prototype</h4>
                  <p>
                    An interactive model showing the user interface and
                    functionality of a product
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-row">
          <div>
            <h2>TEST</h2>
          </div>

          <div className="test-items">
            <div className="item-container">
              <div className="header">
                <h3>PLAN</h3>
                <p className="sub-heading">Create a test plan</p>
              </div>
              <p>
                Creating a testing plan is essential for a practical evaluation
                of a UI/UX design. It sets clear goals, metrics, and resource
                allocations, ensuring a straightforward and systematic
                evaluation process. The plan addresses potential risks, guides
                feedback collection, and fosters collaboration, providing a
                solid basis for practical usability testing and ongoing
                improvement.
              </p>
            </div>

            <div className="item-container">
              <div className="header">
                <h3>CONDUCT</h3>
                <p className="sub-heading">Carry out the test</p>
              </div>
              <p>
                Conducting user tests in user design means getting feedback from
                users to understand how well a product or interface works.
                Observing users interacting with the design helps identify
                issues or improvements. These insights guide practical
                adjustments, ensuring the design suits user preferences and
                behaviors.
              </p>
            </div>

            <div className="item-container">
              <div className="header">
                <h3>REPORT</h3>
                <p className="sub-heading">Analyze and record results</p>
              </div>
              <p>
                Reporting user testing findings means summarizing what users did
                and said to provide insights and recommendations for design
                improvements. A straightforward and clear report helps
                stakeholders understand user experience issues and make informed
                decisions in the design process.
              </p>
            </div>

            <div className="item-container">
              <div className="header">
                <h3>OPTOMIZE</h3>
                <p className="sub-heading">Refine the designs</p>
              </div>
              <p>
                After user testing, we tweak designs based on user feedback to
                make them more user-friendly and effective. This involves
                identifying and addressing specific issues to improve usability
                and align with user preferences. The goal is to refine the
                design through practical adjustments for a smoother user
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
