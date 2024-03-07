import { ReactComponent as Chart } from "../assets/icons/chart.svg";
import { ReactComponent as Routing } from "../assets/icons/routing.svg";
import { ReactComponent as Rows } from "../assets/icons/rows.svg";
import { designProcessBlue } from "../assets";

export default function DesignProcess() {
  return (
    <div className="process-page">
      <div className="header">
        <h1>DESIGN PROCESS</h1>
      </div>

      <div className="image-container">
        <img src={designProcessBlue} alt="design-process" />
      </div>

      <div className="section">
        <div className="section-content">
          <h1>RESEARCH</h1>
          <p className="centered">
            In the design process, thorough research serves as a crucial initial
            step. My research approach focuses on two primary perspectives:
            understanding the business objectives and analyzing user needs. By
            addressing both aspects, I ensure that the resulting product aligns
            with the goals of both stakeholders and users.
          </p>

          <div className="charts-container">
            <div className="chart">
              <div className="chart-header">
                <p>PEOPLE/USERS</p>
              </div>

              <div className="list-container">
                <ul>
                  <li>
                    <p className="bolded">User Interviews</p>
                    <p>Interview with the product’s users/audience</p>
                  </li>

                  <li>
                    <p className="bolded">Surveys</p>
                    <p>Questionnaires help gather qualitative data</p>
                  </li>

                  <li>
                    <p className="bolded">Personas</p>
                    <p>Fictional characters that represent subsets of users</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="chart">
              <div className="chart-header">
                <p>BUSINESS</p>
              </div>

              <div className="list-container">
                <ul>
                  <li>
                    <p className="bolded">Competitive Benchmarking</p>
                    <p>Reviewing best practices from the competition</p>
                  </li>

                  <li>
                    <p className="bolded">Stakeholder Interviews</p>
                    <p>Interviews with the client(s)</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-content">
          <h1>STRATEGIZE</h1>

          <p className="centered">
            Strategic design planning ensures efficiency by aligning tasks with
            clear objectives, incorporating user feedback, and maintaining
            consistency across design elements. This approach also helps in risk
            mitigation.
          </p>

          <div className="blocks-container">
            <div className="block">
              <div>
                <Chart />
              </div>

              <div className="block-text">
                <h2>PRODUCT GOALS</h2>
                <p>
                  An outline defining specific objectives and targets of the
                  project
                </p>
              </div>
            </div>

            <div className="block">
              <div>
                <Routing />
              </div>

              <div className="block-text">
                <h2>PRODUCT ROADMAP</h2>
                <p>
                  A visual plan outlining product goals, features, and timeline
                </p>
              </div>
            </div>

            <div className="block">
              <div>
                <Rows />
              </div>

              <div className="block-text">
                <h2>SITE MAP</h2>
                <p>
                  A visual depiction of the product's hierarchical content
                  structure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-content">
          <h1>DESIGN</h1>
          <p className="centered">
            This is when wireframes and prototypes are created, aiming for an
            intuitive and visually pleasing interface. Testing and feedback help
            refine the design for a user-friendly experience that meets project
            goals.
          </p>

          <div className="squares-container">
            <div className="square">
              <h2>USER FLOW</h2>
              <p>A visual representation of a user's journey</p>
            </div>

            <div className="square">
              <h2>PROTOTYPE</h2>
              <p>
                An interactive model showing the user interface and
                functionality of a product
              </p>
            </div>

            <div className="square">
              <h2>WIREFRAMES</h2>
              <p>Blueprints outlining a website or app's structure</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-content">
          <h1>TEST</h1>

          <p className="centered">
            After completing the previous steps, testing begins. This phase
            involves a methodical approach to make sure testing is efficient and
            effective. The goal of testing the product is to ensure that the
            product meets all benchmarks.
          </p>

          <div className="test-rows">
            <div className="test">
              <h2>PLAN</h2>
              <p className="bolded">Create a test plan</p>
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

            <div className="test">
              <h2>CONDUCT</h2>
              <p className="bolded">Carry out the test</p>
              <p>
                Conducting user tests in user design means getting feedback from
                users to understand how well a product or interface works.
                Observing users interacting with the design helps identify
                issues or improvements. These insights guide practical
                adjustments, ensuring the design suits user preferences and
                behaviors.
              </p>
            </div>

            <div className="test">
              <h2>REPORT</h2>
              <p className="bolded">Analyze and record results</p>
              <p>
                Reporting user testing findings means summarizing what users did
                and said to provide insights and recommendations for design
                improvements. A straightforward and clear report helps
                stakeholders understand user experience issues and make informed
                decisions in the design process.
              </p>
            </div>

            <div className="test">
              <h2>OPTOMIZE</h2>
              <p className="bolded">Refine the designs</p>
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
