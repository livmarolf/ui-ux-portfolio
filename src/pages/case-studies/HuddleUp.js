import designProcess from "../../assets/dark/design-process.png";
import persona from "../../assets/dark/persona.png";
import productMap from "../../assets/dark/product-map.png";
import userTaskFlow from "../../assets/dark/user-task-flow.png";
import huddleupWireframes from "../../assets/dark/huddleup-wireframes.png";

export default function HuddleUp() {
  return (
    <div className="page-content">
      <div className="header-row">
        <h1>CASE STUDY 01</h1>
      </div>

      <div className="title-container">
        <h1 className="large-header">HUDDLEUP</h1>
      </div>

      <div className="grey-header">
        <h2>PROJECT OVERVIEW</h2>
      </div>

      <div className="overview-container">
        <div className="content-section">
          <h2>THE CHALLENGE</h2>

          <div>
            <p>
              This new app simplifies sports team management for coaches,
              players, gym owners, and enthusiasts across various levels,
              addressing common administrative challenges that can distract from
              training and enjoying sports.
            </p>

            <p>
              Streamlining sports team management is achieved by allowing
              coaches to effortlessly track attendance, practice hours, and
              promotions. It also offers user-friendly team calendars to enhance
              communication and coordination. In essence, this app streamlines
              the sports experience, reducing administrative hassles and
              enabling a more focused pursuit of athletic excellence for
              everyone involved.
            </p>
          </div>
        </div>

        <div className="content-section">
          <h2>THE OBJECTIVE</h2>

          <p>
            Design a mobile app that is user-friendly and easy to use with a
            clean design.
          </p>
        </div>
      </div>

      <div className="grey-header">
        <h2>PROJECT INFORMATION</h2>
      </div>

      <div className="information-container">
        <div className="content-section">
          <h2>DELIVERABLES</h2>

          <div className="content">
            <div>
              <h3>Interaction Design</h3>
              <p>High-fidelity interactive prototypes for key tasks on iOS</p>
            </div>

            <div>
              <h3>UI/UX Design</h3>
              <ul>
                <li>Competitive analysis</li>
                <li>User surveys and one-on-one interviews</li>
                <li>Personas</li>
                <li>User journeys and task flows</li>
                <li>Site Map</li>
                <li>Low-fidelity wireframes</li>
                <li>High-fidelity mockups and prototypes</li>
                <li>Usability tests and findings</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>EXPERTISE</h2>

          <div className="content">
            <div>
              <h3>Role</h3>
              <ul>
                <li>
                  UX Designer (Research, Visual Design, Interaction Design,
                  Usability Testing)
                </li>
                <li>User Interface (UI) Designer</li>
                <li>Content Designer</li>
              </ul>
            </div>

            <div>
              <h3>Tools</h3>
              <ul>
                <li>Figma</li>
                <li>Adobe Illustrator</li>
                <li>Trello</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grey-header">
        <h2>DESIGN PROCESS</h2>
      </div>

      <div className="process-container">
        <div className="content-section">
          <h2>MY DESIGN PROCESS</h2>

          <div className="content">
            <div>
              <button>Learn More</button>
            </div>

            <img src={designProcess} alt="my-design-process" />
          </div>
        </div>
      </div>

      <div className="grey-header">
        <h2>RESEARCH</h2>
      </div>

      <div className="research-container">
        <div className="content-section">
          <h2>RESEARCH PLAN</h2>

          <div className="content">
            <p>
              Research explores user behaviors, motivations, challenges,
              aspirations, constraints, and objectives, providing essential
              insights for later project phases. To ensure effective guidance
              for responsive website design, a carefully crafted research plan
              is necessary, detailing research goals, inquiries, methods,
              participants, and a clear timeline.
            </p>

            <div>
              <h3>Research Goals</h3>

              <ul>
                <li>Understand the market of platforms related to Sports</li>
                <li>Identify the target audience</li>
                <li>
                  Gather insights on how key competitors address customer needs
                </li>
                <li>Get to know how coaches are managing their teams</li>
                <li>
                  Uncover people's experience using team management platforms
                </li>
                <li>Assess competitor’s strengths and weaknesses</li>
              </ul>
            </div>

            <div>
              <h3>Methodologies</h3>

              <ul>
                <li>
                  Secondary Research (Market Research, Competitive Analysis)
                </li>
                <li>Primary Research (User Interview)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>SECONDARY RESEARCH</h2>

          <div className="content">
            <div>
              <h3>Market Research</h3>

              <p>
                Market research important to grasp the broader market landscape,
                including audience, knowledge gaps, recent trends, and news. The
                insights gained will inform provisional personas and guide
                meaningful questions for primary research.
              </p>
            </div>

            <div>
              <h3>Sports Industry & Platforms</h3>

              <p>
                Overall in the realm of sports, team management platforms have
                emerged as highly influential tools, enjoying widespread
                popularity for their role in optimizing team organization and
                performance. It is expected that the global sports management
                software market to exhibit a CAGR of 14.8% during 2023-2028
                (imarc). The sports team management platform industry has
                experienced a consistent increase in demand, driven by the need
                for streamlined communication, scheduling, and data management
                for sports teams of all levels
              </p>
            </div>

            <div>
              <h3>Demographics</h3>

              <ul className="unstyled-list">
                <li>
                  A significant portion of the user demographic comprises youth
                  and amateur sports teams, such as Little League baseball,
                  local soccer clubs, and school athletics.
                </li>

                <li>
                  Sports management platforms are commonly utilized by schools,
                  colleges, and universities to coordinate sports activities,
                  manage teams, and ensure compliance with regulations.
                </li>

                <li>
                  Beyond competitive sports, recreational and community teams,
                  often organized by community centers or local groups, use
                  these platforms to facilitate sports participation and
                  community engagement.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>COMPETITIVE RESEARCH</h2>

          <div className="content">
            <div>
              <p>Three examples of competitors</p>
            </div>

            <div>
              <img alt="competitors" />
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>PRIMARY RESEARCH</h2>

          <div className="content">
            <p>
              I went beyond my basic market understanding and had more
              meaningful conversations with our user community, which helped me
              gather direct insights through primary research methods.
            </p>

            <div>
              <h3>Questions Asked While Interviewing</h3>

              <ul>
                <li>What is your current approach to team management?</li>
                <li>
                  Can you share some challenging experiences you've encountered
                  while overseeing your team?
                </li>
                <li>
                  In terms of scheduling, how do you typically communicate
                  changes to your team?
                </li>
                <li>
                  Where do you maintain your team's seasonal calendar, and what
                  methods do you employ to keep it up-to-date?
                </li>
                <li>
                  How satisfied are you with the team's communication dynamics?
                </li>
                <li>
                  Do you believe you are sufficiently informed about any
                  schedule changes?
                </li>
                <li>
                  Are you confident in your understanding of the team's
                  performance over the course of the season?
                </li>
                <li>
                  Is it easy for you to track your training progress and the
                  hours you've dedicated to it?
                </li>
              </ul>
            </div>

            <div>
              <h3>User Interviews</h3>

              <p>
                A total of six participants were interviewed, comprising two
                coaches, one team manager, and three teammates. Here are the key
                takeaways:
              </p>

              <ul>
                <li>
                  6/6 participants communicated that transparency in
                  communication, especially concerning schedule changes, is an
                  area where improvements are needed
                </li>
                <li>
                  All teammates (3/6 interviewees) expressed interest in easily
                  tracking their training progress and the hours dedicated to
                  it, indicating a potential opportunity for better monitoring
                  tools or methods
                </li>
                <li>
                  It was stated by all interviewees (6/6) that the methods used
                  for scheduling communication differ, with a combination of
                  email, team meetings, messaging apps, and digital calendars
                  being employed
                </li>
                <li>
                  2/6 interviewees have faced challenges in team management,
                  such as motivating players during losing streaks and handling
                  tension within the team due to differing playing styles
                </li>
              </ul>
            </div>

            <div>
              <h3>User Persona</h3>

              <p>
                With a good understanding of the audience, including their
                objectives and requirements, I use user personas to represent
                important audience segments. This helps me focus on addressing
                key challenges and meeting the primary needs of user groups.
              </p>

              <img src={persona} alt="persona" />
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>STRATEGY</h2>

          <div className="content">
            <div>
              <h3>Product Goals</h3>

              <p>
                I've chosen to compile project goals that will serve as a
                roadmap for the future development of the product. These goals
                will also act as criteria for deciding which features to
                incorporate into the mobile application.
              </p>

              <p>
                These objectives blend user goals from my user persona with
                business goals based on all available information.
              </p>
            </div>

            <img alt="product-goals" />
          </div>
        </div>

        <div className="content-section">
          <h2>PRIORITIZED ROADMAP</h2>

          <div className="content">
            <div>
              <p>
                Subsequently, I translated my brainstormed solutions into a
                detailed list of product features to construct a product
                roadmap. These features were categorized into four groups:
                Must-have (P1), Nice-to-Have (P2), and Extra (P3) features. The
                categorization was based on their alignment with both business
                and user objectives.
              </p>

              <p>
                The product roadmap not only aligns project goals with the
                product but also guarantees that we prioritize the most critical
                features during the development phase.
              </p>
            </div>

            <div>
              <h3>P1</h3>
              <ul className="unstyled-list">
                <li>Sign Up/Sign In/Sign Out</li>
                <li>Create teams</li>
                <li>User roles</li>
                <li>Class/practice check-in</li>
                <li>Team scheduling (shared calendar)</li>
                <li>User profiles</li>
                <li>Create Events</li>
                <li>Subscriptions</li>
                <li>Payment handling</li>
              </ul>
            </div>

            <div>
              <h3>P2</h3>

              <ul className="unstyled-list">
                <li>Team messaging</li>
                <li>Team search</li>
                <li>User statistics</li>
                <li>Multiple team chat</li>
                <li>Notifications</li>
                <li>Calendar comparison</li>
                <li>Scheduling comparison</li>
                <li>Social media sharing</li>
              </ul>
            </div>

            <div>
              <h3>P3</h3>

              <ul className="unstyled-list">
                <li>Team dashboard</li>
                <li>Statistic notifications</li>
                <li>Achievements</li>
                <li>Custom achievements</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>PRODUCT MAP</h2>

          <div className="content">
            <img
              className="scaled-down-img"
              src={productMap}
              alt="product-map"
            />
          </div>
        </div>

        <div className="content-section">
          <h2>USER AND TASK FLOW</h2>

          <div className="content">
            <p>
              I developed the user task flow for the class check-in process, a
              pivotal functionality within the website. This task flow is
              designed to accommodate guest visitors seeking to enroll in a
              class.
            </p>

            <img src={userTaskFlow} alt="user-task-flow" />
          </div>
        </div>
      </div>

      <div className="grey-header">
        <h2>DESIGN</h2>
      </div>

      <div className="design-container">
        <div className="content-section">
          <h2>WIREFRAMES</h2>

          <div className="content">
            <p>
              Wireframes are a fundamental tool in design, serving as a
              blueprint that guides the development of user-friendly and
              efficient interfaces. Explore the HuddleUp wireframes below.
            </p>

            <img src={huddleupWireframes} alt="huddleup-wireframes" />
          </div>
        </div>

        <div className="content-section">
          <h2>HIGH FIDELITY PROTOTYPE</h2>

          <div className="content">
            <iframe
              title="prototype"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
              width="auto"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FhWGqq6cTi2xWuueNhOtGT5%2Fpersonal-site-pt2%3Fpage-id%3D446%253A407%26type%3Ddesign%26node-id%3D393-2804%26viewport%3D-490%252C296%252C0.15%26t%3DOePoe1VMuBOkBg02-1%26scaling%3Dscale-down%26starting-point-node-id%3D393%253A2804%26mode%3Ddesign&hide-ui=1"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="grey-header">
        <h2>CONCLUSION</h2>
      </div>

      <div className="thoughts-container">
        <div className="content-section">
          <h2>FINAL THOUGHTS</h2>
          <div className="content">
            <p>
              After finishing the final prototype, I believe the initial design
              goals have been met. The mobile app prioritizes sports team
              management and player engagement. If more time were available, I'd
              work on adding extra features that, while not essential, could
              enhance the app's qualities, adding more value to the business and
              boosting its competitiveness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
