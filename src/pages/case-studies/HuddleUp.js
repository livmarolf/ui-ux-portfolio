import designProcess from "../../assets/design-graphic.svg";
import comp from "../../assets/comp.svg";
import persona from "../../assets/persona.svg";
import diagram from "../../assets/diagram.svg";
import userFlow from "../../assets/user-flow.svg";
import taskFlow from "../../assets/task-flow.svg";
import huWireframes from "../../assets/wireframes-hu.png";

export default function HuddleUp() {
  return (
    <div className="huddleup-container">
      <div className="content-container">
        <div className="title">
          <h2>UI/UX CASE STUDY 01 &mdash;</h2>
          <h1>HuddleUp</h1>
        </div>

        <div className="project-overview">
          <h6>PROJECT OVERVIEW &mdash;</h6>

          <div className="project-content">
            <h4>The Challenge</h4>
            <p>
              This innovative new app addresses the complex task of managing
              sports teams across various levels, from professional to
              recreational. Coaches, players, gym owners, and enthusiasts often
              encounter administrative challenges that divert their attention
              from training and enjoying their sports.
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

            <h4>The Objective</h4>
            <p>
              Design a mobile app that is user-friendly and easy to use with a
              clean design.
            </p>
          </div>
        </div>

        <div className="project-information">
          <h6>PROJECT INFORMATION</h6>

          <div className="information-content">
            <h4>Deliverables</h4>

            <h5>Interaction Design</h5>
            <p>High-fidelity interactive prototypes for key tasks on iOS</p>

            <h5>UI/UX Design</h5>

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

            <h4>Expertise</h4>
            <h5>Role</h5>

            <ul>
              <li>
                UX Designer (Research, Visual Design, Interaction Design,
                Usability Testing)
              </li>
              <li>User Experience (UX) Designer</li>
              <li>User Interface (UI) Designer</li>
              <li>Content Designer</li>
            </ul>

            <h5>Tools</h5>

            <ul>
              <li>Figma</li>
              <li>Adobe Illustrator</li>
              <li>Trello</li>
              <li>Miro</li>
            </ul>
          </div>
        </div>

        <div className="design-process">
          <h5>My Design Process</h5>
          <button>Learn More</button>

          <img src={designProcess} alt="design-process" />
        </div>

        <div className="resesarch">
          <h4>Resesarch Plan</h4>
          <p>
            Research delves into user behaviors, motivations, challenges,
            aspirations, constraints, and objectives—{" "}
            <strong>essential for informed solutions</strong> in later project
            phases. To ensure{" "}
            <strong>research guides responsive website design</strong>{" "}
            effectively, a <strong>meticulously crafted research plan</strong>{" "}
            is imperative. It includes research goals, inquiries, methods,
            participants, and a clear timeline.
          </p>

          <h5>Research Goals</h5>
          <ul>
            <li>Understand the market of platforms related to Sports </li>
            <li>Identify the target audience</li>
            <li>
              Gather insights on how key competitors address customer needs
            </li>
            <li>Get to know how coaches are managing their teams </li>
            <li>Uncover people's experience using team management platforms</li>
            <li>Assess competitor's strengths and weaknesses</li>
          </ul>

          <h5>Methodologies</h5>
          <ul>
            <li>Secondary Research (Market Research, Competitive Analysis)</li>
            <li>Primary Research (User Interview)</li>
          </ul>

          <h4>Secondary Reseasrch</h4>
          <h5>Market Research</h5>
          <p>
            Begin with market research to{" "}
            <strong>grasp the broader market landscape</strong>, including
            audience, knowledge gaps, recent trends, and news. The insights
            gained will <strong>inform provisional personas</strong> and guide
            meaningful questions for <strong>primary research</strong>.
          </p>

          <h5>Sports Industry & Platforms</h5>
          <p>
            Overall in the realm of sports, team management platforms have
            emerged as <strong>highly influential tools</strong>, enjoying
            widespread popularity for their role in{" "}
            <strong>optimizing team organization and performance</strong>. It is
            expected that the global sports management software market to
            <strong>exhibit a CAGR of 14.8% during 2023-2028</strong> (imarc).
            The sports team management platform industry has experienced a
            <strong>consistent increase in demand</strong>, driven by the need
            for streamlined communication, scheduling, and data management for
            sports teams of all levels
          </p>

          <h5>Demographics</h5>
          <p>
            A significant portion of the user demographic comprises{" "}
            <strong>youth and amateur sports teams</strong>, such as Little
            League baseball, local soccer clubs, and school athletics.
          </p>
          <p>
            Sports management platforms are commonly utilized by{" "}
            <strong>schools, colleges, and universities</strong> to coordinate
            sports activities, manage teams, and ensure compliance with
            regulations.
          </p>
          <p>
            Beyond competitive sports, recreational and community teams, often
            organized by <strong>community centers or local groups</strong>, use
            these platforms to facilitate sports participation and community
            engagement.
          </p>

          <h4>Competitive Research</h4>
          <p>Three examples of competitors</p>
          <img src={comp} alt="comp" />

          <h4>Primary Research</h4>
          <p>
            Building on my basic market understanding, I delved deeper and
            engaged more meaningfully with our user community. This effort
            allowed me to gather direct insights through primary research
            methods.
          </p>

          <h5>Questions Asked While Interviewing</h5>
          <ul>
            <li>What is your current approach to team management?</li>
            <li>
              Can you share some challenging experiences you've encountered
              while overseeing your team?
            </li>
            <li>
              In terms of scheduling, how do you typically communicate changes
              to your team?
            </li>
            <li>
              Where do you maintain your team's seasonal calendar, and what
              methods do you employ to keep it up-to-date?
            </li>
            <li>
              How satisfied are you with the team's communication dynamics?
            </li>
            <li>
              Do you believe you are sufficiently informed about any schedule
              changes?
            </li>
            <li>
              Are you confident in your understanding of the team's performance
              over the course of the season?
            </li>
            <li>
              Is it easy for you to track your training progress and the hours
              you've dedicated to it?
            </li>
          </ul>

          <h5>User Interviews</h5>
          <p>
            A total of six participants were interviewed, comprising two
            coaches, one team manager, and three teammates. Here are the key
            takeaways:
          </p>

          <ul>
            <li>
              6/6 participants communicated that transparency in communication,
              especially concerning schedule changes, is an area where
              improvements are needed
            </li>
            <li>
              All teammates (3/6 interviewees) expressed interest in easily
              tracking their training progress and the hours dedicated to it,
              indicating a potential opportunity for better monitoring tools or
              methods
            </li>
            <li>
              It was stated by all interviewees (6/6) that the methods used for
              scheduling communication differ, with a combination of email, team
              meetings, messaging apps, and digital calendars being employed
            </li>
            <li>
              2/6 interviewees have faced challenges in team management, such as
              motivating players during losing streaks and handling tension
              within the team due to differing playing styles
            </li>
          </ul>

          <h5>User Persona</h5>
          <p>
            Having accumulated a wealth of knowledge about the audience,
            including their objectives and requirements, I leverage user
            personas to represent pivotal audience segments. This approach
            enables me to concentrate on addressing the most significant
            challenges—meeting the primary needs of key user groups
          </p>

          <img src={persona} alt="persona" />

          <h4>Strategy</h4>
          <h5>Product Goals</h5>
          <p>
            I've chosen to compile project goals that will serve as a roadmap
            for the future development of the product. These goals will also act
            as criteria for deciding which features to incorporate into the
            mobile application.
          </p>
          <p>
            These objectives are a synthesis of user goals derived from my user
            persona and business goals grounded in all available information.
          </p>

          <img src={diagram} alt="diagram" />

          <h4>Prioritized Roadmap</h4>
          <p>
            Subsequently, I translated my brainstormed solutions into a detailed
            list of product features to construct a comprehensive product
            roadmap. These features were categorized into four groups: Must-have
            (P1), Nice-to-Have (P2), and Surprising and Delightful (P3)
            features. The categorization was based on their alignment with both
            business and user objectives.
          </p>
          <p>
            The product roadmap not only aligns project goals with the product
            but also guarantees that we prioritize the most critical features
            during the development phase.
          </p>

          <h5>P1</h5>
          <ul>
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

          <h5>P2</h5>
          <ul>
            <li>Team messaging</li>
            <li>Team search</li>
            <li>User statistics</li>
            <li>Multiple team chat</li>
            <li>Notifications </li>
            <li>Calendar comparison</li>
            <li>Scheduling comparison</li>
            <li>Social media sharing</li>
          </ul>

          <h5>P3</h5>
          <ul>
            <li>Team dashboard</li>
            <li>Statistic notifications</li>
            <li>Achievements</li>
            <li>Custom achievements</li>
          </ul>

          <h4>Product Roadmap</h4>
          <img src={userFlow} alt="user-flow" />
        </div>

        <div className="design">
          <h4>User And Task Flow</h4>
          <p>
            I developed the user task flow for the class check-in process, a
            pivotal functionality within the website. This task flow is designed
            to accommodate guest visitors seeking to enroll in a class.
          </p>
          <img src={taskFlow} alt="task-flow" />

          <h4>Wireframes</h4>
          <p>
            Wireframes are a fundamental tool in design, serving as a blueprint
            that guides the development of user-friendly and efficient
            interfaces. Explore the HuddleUp wireframes below.
          </p>
          <img src={huWireframes} alt="hu-wireframes" />

          <h4>High Fidelity Prototype</h4>
          <div>embed prototype here</div>
        </div>

        <div className="final-thoughts">
          <p>
            Upon the completion of the final prototype, I am confident that the
            goals established at the outset of the design process have been
            successfully attained. The mobile application I have crafted offers
            a range of features with a central focus on sports team management
            and enhancing player involvement.
          </p>

          <p>
            Given additional time, I would invest further effort in the
            development of certain desirable, albeit non-essential, features.
            These enhancements would augment the application's attributes,
            contributing additional facets to the business and bolstering its
            competitiveness.
          </p>
        </div>
      </div>
    </div>
  );
}
