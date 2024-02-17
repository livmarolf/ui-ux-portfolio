import {
  huPrototype,
  figma,
  illustrator,
  trello,
  designProcess,
  competitors,
  persona,
  productGoals,
  roadmap,
  userFlow,
  taskFlow,
  typography,
  huPhone,
  huPhones,
} from "../../assets";
import HuWireframes from "../../components/HuWireframes";

export default function HuddleUp() {
  return (
    <div className="page-content">
      <div className="title-container">
        <div className="title">
          <h1>HUDDLEUP</h1>
          <div>
            <p>A sports team management application</p>
          </div>
        </div>

        <div className="image-wrapper">
          <img src={huPrototype} alt="hu-prototypes" />
        </div>
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>01</h3>
          <h2>PRODUCT OVERVIEW</h2>
        </div>

        <div className="content-wrapper">
          <div className="paragraph-container">
            <p>
              HuddleUp simplifies sports team management for coaches, players,
              gym owners, and enthusiasts across various levels, addressing
              common administrative challenges that can distract from training
              and enjoying sports.
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
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>02</h3>
          <h2>RESPONSIBILITY</h2>
        </div>

        <div className="content-wrapper">
          <ul className="unstyled-list">
            <li>
              UX Designer (Research, Visual Design, Interaction Design,
              Usability Testing)
            </li>
            <li>User Interface (UI) Designer</li>
            <li>Content Designer</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>03</h3>
          <h2>TOOLS</h2>
        </div>

        <div className="content-wrapper">
          <div className="tools">
            <img src={figma} alt="figma" />
            <img src={illustrator} alt="adobe-illustrator" />
            <img src={trello} alt="trello" />
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>04</h3>
          <h2>PROBLEM STATEMENT</h2>
        </div>

        <div className="content-wrapper">
          <p>
            HuddleUp simplifies sports team management by addressing various
            administrative challenges. It offers intuitive solutions for
            scheduling, roster management, and performance tracking, helping
            coaches, players, and administrators streamline their tasks. With
            its user-friendly interface and comprehensive features, HuddleUp
            makes team management more efficient, allowing users to focus on the
            game.
          </p>
        </div>
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>05</h3>
          <h2>DELIVERABLES</h2>
        </div>

        <div className="content-wrapper">
          <div className="deliverables-grid">
            <div>
              <p>Site Map</p>
            </div>

            <div>
              <p>Personas</p>
            </div>

            <div>
              <p>Competitive analysis</p>
            </div>

            <div>
              <p>Low-fidelity wireframes</p>
            </div>

            <div>
              <p>Usability tests and findings</p>
            </div>

            <div>
              <p>User journeys and task flows</p>
            </div>

            <div>
              <p>High-fidelity prototypes</p>
            </div>

            <div>
              <p>User surveys and interviews</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>06</h3>
          <h2>DESIGN PROCESS</h2>
        </div>

        <div className="content-wrapper">
          <div className="img-wrapper">
            <img src={designProcess} alt="design-process" />
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>07</h3>
          <h2>RESEARCH PLAN</h2>
        </div>

        <div className="content-wrapper">
          <div>
            <p>
              Research explores user behaviors, motivations, challenges,
              aspirations, constraints, and objectives, providing essential
              insights for later project phases. To ensure effective guidance
              for responsive website design, a carefully crafted research plan
              is necessary, detailing research goals, inquiries, methods,
              participants, and a clear timeline.
            </p>
          </div>

          <div>
            <h4>Research Goals</h4>

            <ul className="styled-list">
              <li>Identify the target audience</li>
              <li>Assess competitor’s strengths and weaknesses</li>
              <li>Get to know how coaches are managing their teams</li>
              <li>Understand the market of platforms related to Sports </li>
              <li>
                Uncover people's experience using team management platforms
              </li>
              <li>
                Gather insights on how key competitors address customer needs
              </li>
            </ul>
          </div>

          <div>
            <h4>Methodologies</h4>

            <ul className="styled-list">
              <li>
                Primary Research (User Interview)Primary Research (User
                Interview)
              </li>
              <li>
                Secondary Research (Market Research, Competitive Analysis)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>08</h3>
          <h2>TARGET AUDIENCE</h2>
        </div>

        <div className="content-wrapper">
          <p>
            HuddleUp caters to a broad audience of sports enthusiasts, including
            coaches, players, and team administrators at different levels of
            expertise. Coaches use it for team management and performance
            tracking, while players rely on it for schedules and communication.
            Team administrators benefit from centralized control and reporting
            features. Whether users are seasoned athletes or new to sports, the
            app offers intuitive tools to enhance their experience.
          </p>
        </div>
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>09</h3>
          <h2>USER INTERVIEWS</h2>
          <h2 className="sub-title">(PRIMARY RESEARCH)</h2>
        </div>

        <div className="content-wrapper">
          <div>
            <p>
              I went beyond my basic market understanding and had more
              meaningful conversations with our user community, which helped me
              gather direct insights through primary research methods.
            </p>
          </div>

          <div>
            <h4>Questions Asked While Interviewing</h4>
            <ul className="styled-list">
              <li>What is your current approach to team management?</li>
              <li>
                How satisfied are you with the team's communication dynamics?
              </li>
              <li>
                Do you believe you are sufficiently informed about any schedule
                changes?
              </li>
              <li>
                In terms of scheduling, how do you typically communicate changes
                to your team?
              </li>
              <li>
                Is it easy for you to track your training progress and the hours
                you've dedicated to it?
              </li>
              <li>
                Can you share some challenging experiences you've encountered
                while overseeing your team?
              </li>
              <li>
                Are you confident in your understanding of the team's
                performance over the course of the season?
              </li>
              <li>
                Where do you maintain your team's seasonal calendar, and what
                methods do you use to keep it up-to-date?
              </li>
            </ul>
          </div>

          <div>
            <h4>User Interviews</h4>
            <p>
              A total of six participants were interviewed, comprising two
              coaches, one team manager, and three teammates. Here are the key
              takeaways:
            </p>
          </div>

          <div className="interview-cards">
            <div className="card">
              <div>
                <h3>6/6</h3>
                <p>
                  All participants communicated that transparency in
                  communication, especially concerning schedule changes, is an
                  area where improvements are needed
                </p>
              </div>
            </div>

            <div className="card">
              <div>
                <h3>3/6</h3>
                <p>
                  All teammates expressed interest in easily tracking their
                  training progress and the hours dedicated to it, indicating a
                  potential opportunity for better monitoring tools or methods
                </p>
              </div>
            </div>

            <div className="card">
              <div>
                <h3>6/6</h3>
                <p>
                  All interviewees stated that the methods used for scheduling
                  communication differ, with a combination of email, team
                  meetings, messaging apps, and digital calendars being employed
                </p>
              </div>
            </div>

            <div className="card">
              <div>
                <h3>2/6</h3>
                <p>
                  Both coaches have faced challenges in team management, such as
                  motivating players during losing streaks and handling tension
                  within the team due to differing playing styles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>10</h3>
          <h2>MARKET RESEARCH</h2>
          <h2 className="sub-title">(SECONDARY RESEARCH)</h2>
        </div>

        <div className="content-wrapper">
          <div>
            <p>
              It is important to begin with market research to grasp the broader
              market landscape, including audience, knowledge gaps, recent
              trends, and news. The insights gained will inform provisional
              personas and guide meaningful questions for primary research.
            </p>
          </div>

          <div>
            <h4>Sports Industry & Platforms</h4>
            <p>
              Overall in the realm of sports, team management platforms have
              emerged as highly influential tools, enjoying widespread
              popularity for their role in optimizing team organization and
              performance. It is expected that the global sports management
              software market to exhibit a CAGR of 14.8% during 2023-2028
              (imarc). The sports team management platform industry has
              experienced a consistent increase in demand, driven by the need
              for streamlined communication, scheduling, and data management for
              sports teams of all levels
            </p>
          </div>

          <div>
            <h4>Demographics</h4>

            <ul className="styled-list">
              <li>Youth and amateur sports teams</li>
              <li>Schools, colleges, and universities</li>
              <li>Recreational and community teams</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>11</h3>
          <h2>COMPETITIVE RESEARCH</h2>
        </div>

        <div className="content-wrapper">
          <div>
            <p>Three examples of competitors</p>
          </div>
          <div className="img-wrapper">
            <img src={competitors} alt="competitors" />
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>12</h3>
          <h2>USER PERSONA</h2>
        </div>

        <div className="content-wrapper">
          <div>
            <p>
              With a good understanding of the audience, including their
              objectives and requirements, I use user personas to represent
              important audience segments. This helps me focus on addressing key
              challenges and meeting the primary needs of user groups.
            </p>
          </div>

          <div className="img-wrapper">
            <img src={persona} alt="hu-persona" />
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>13</h3>
          <h2>PRODUCT GOALS</h2>
        </div>

        <div className="content-wrapper">
          <div className="paragraph-container">
            <p>
              I've chosen to compile project goals that will serve as a roadmap
              for the future development of the product. These goals will also
              act as criteria for deciding which features to incorporate into
              the mobile application.
            </p>
            <p>
              These objectives are a synthesis of user goals derived from my
              user persona and business goals grounded in all available
              information.
            </p>
          </div>
          <div className="img-wrapper">
            <img src={productGoals} alt="product-goals" />
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>14</h3>
          <h2>PRIORITISED ROADMAP</h2>
        </div>

        <div className="content-wrapper">
          <div className="paragraph-container">
            <p>
              Subsequently, I translated my brainstormed solutions into a
              detailed list of product features to construct a comprehensive
              product roadmap. These features were categorized into four groups:
              Must-have (P1), Nice-to-Have (P2), and Surprising and Delightful
              (P3) features. The categorization was based on their alignment
              with both business and user objectives.
            </p>

            <p>
              The product roadmap not only aligns project goals with the product
              but also guarantees that we prioritize the most critical features
              during the development phase.
            </p>
          </div>

          <div className="list-container">
            <div>
              <h4>P1</h4>
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
              <h4>P2</h4>
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
              <h4>P3</h4>
              <ul className="unstyled-list">
                <li>Team dashboard</li>
                <li>Statistic notifications</li>
                <li>Achievements</li>
                <li>Custom achievements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>15</h3>
          <h2>PRIORITISED ROADMAP</h2>
        </div>

        <div className="content-wrapper">
          <div className="img-wrapper">
            <img src={roadmap} alt="prioritized-roadmap" />
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>16</h3>
          <h2>USER AND TASK FLOW</h2>
        </div>

        <div className="content-wrapper">
          <div>
            <p>
              I developed the user task flow for the class check-in process, a
              pivotal functionality within the website. This task flow is
              designed to accommodate guest visitors seeking to enroll in a
              class.
            </p>
          </div>

          <div>
            <h4>User Flow</h4>
            <div className="img-wrapper">
              <img src={userFlow} alt="user-flow" />
            </div>
          </div>

          <div>
            <h4>Task Flow</h4>
            <div className="img-wrapper">
              <img src={taskFlow} alt="task-flow" />
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>17</h3>
          <h2>WIREFRAMES</h2>
        </div>

        <div className="content-wrapper">
          <HuWireframes />
        </div>
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>18</h3>
          <h2>TYPOGRAPHY</h2>
        </div>

        <div className="content-wrapper">
          <div className="img-wrapper">
            <img src={typography} alt="typography" />
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>19</h3>
          <h2>PROTOTYPE</h2>
        </div>

        <div className="content-wrapper">
          <a
            className="prototype-link-wrapper"
            href="https://www.figma.com/proto/uvihyeI6mIAEy90es6flsk/HuddleUp?page-id=1%3A2&type=design&node-id=1-601&viewport=255%2C128%2C0.16&t=ApVsOOHBz1gUYM3S-1&scaling=scale-down&starting-point-node-id=1%3A601&mode=design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="link-contents">
              <img src={huPhones} alt="prototype" />
              <p>CLICK TO VIEW PROTOTYPE</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
