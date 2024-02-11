import {
  designProcess,
  figma,
  trello,
  illustrator,
  rprePersona,
  rprePrioritiedRoadmap,
  rpreProductGoals,
  rprePrototype,
  rpreTaskFlow,
  rpreTypography,
  rpreUserFlow,
  rpreWireframes,
} from "../../assets";

export default function RPRE() {
  return (
    <div className="page-content rpre">
      <div className="title-container">
        <div className="title">
          <h1>REAL PATREA REAL ESTATE</h1>
          <div>
            <p>A real estate agent's custom application</p>
          </div>
        </div>

        <div className="image-wrapper">
          <img src={rprePrototype} alt="rpre-prototype" />
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
              Real estate agents face challenges in maintaining effective
              communication with clients. Traditional methods like phone calls
              and emails are often insufficient for meeting evolving client
              expectations. Agents must be accessible and provide personalized
              experiences. There's a growing demand for practical solutions to
              help agents navigate transactions while fostering client
              connections in a competitive industry.
            </p>
            <p>
              Handling a constant stream of new clients poses a challenge.
              Agents must balance time management with ensuring each client
              feels valued. The shift to digital-first approaches requires
              rethinking client interactions. This emphasizes the importance of
              UI/UX design in simplifying workflows, enhancing accessibility,
              and improving client engagement in real estate.
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
            This website should help agents manage properties, communicate with
            clients, and handle transactions smoothly. It should also simplify
            administrative tasks like scheduling appointments and tracking leads
            with an easy-to-use interface. Overall, the goal is to create a
            user-friendly app that boosts productivity and improves the
            efficiency of real estate agents' workflows.
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
              My research plan involves talking to real estate agents through
              interviews, surveys, and user testing. I want to understand their
              needs and challenges better. I'll also look at market trends and
              competitors. Then, I'll set clear goals, methods, participants,
              and a timeline for collecting and analyzing data. This will help
              ensure the app meets agents' needs effectively.
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
            This application serves both real estate agents and their clients.
            It provides agents with streamlined workflows and better client
            interactions, while offering clients a user-friendly platform for
            property search and communication. This dual focus aims to improve
            the overall real estate experience for everyone involved.
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
              In this section, I'll share insights from direct interviews with
              real estate agents and clients. These conversations provided
              valuable perspectives on their experiences, needs, and
              preferences, shaping the application's development to better serve
              them.
            </p>
          </div>

          <div>
            <h4>Questions Asked While Interviewing</h4>
            <ul className="styled-list">
              <li>
                What factors influence your decision to choose a particular real
                estate agent?
              </li>
              <li>
                When researching properties online, what features or information
                are most important to you?
              </li>
              <li>
                In what ways do you typically utilize technology or online
                platforms in your home-buying process?
              </li>
              <li>
                Have you ever abandoned a real estate website during your
                search? If so, what led to that decision?
              </li>
              <li>
                Can you describe a positive experience you've had with a real
                estate website? What made it stand out to you?
              </li>
              <li>
                How do you prefer to communicate with real estate agents during
                your property search? (Email, phone calls, live chat, etc.)
              </li>
              <li>
                Can you share your recent experiences in searching for a real
                estate agent or property? What challenges did you face during
                this process?
              </li>
              <li>
                What criteria do you consider when evaluating real estate agents
                online? Have you encountered any difficulties in navigating real
                estate websites? If so, what specific issues did you face?
              </li>
            </ul>
          </div>

          <div>
            <h4>User Interviews</h4>
            <p>
              Nine participants were interviewed, comprising both potential home
              buyers (5/9) and potential commercial buyers (4/9). Here are the
              key takeaways:
            </p>
          </div>

          <div className="interview-cards">
            <div className="card">
              <div>
                <h3>8/9</h3>
                <p>
                  8/9 participants found it challenging to sift through the vast
                  amount of online information to find properties that suited
                  their needs
                </p>
              </div>
            </div>

            <div className="card">
              <div>
                <h3>7/9</h3>
                <p>
                  Several participants (7/9), both home and commercial buyers,
                  mentioned difficulties in navigating real estate websites,
                  particularly in terms of complex filters and unintuitive
                  navigation menus.
                </p>
              </div>
            </div>

            <div className="card">
              <div>
                <h3>9/9</h3>
                <p>
                  Property photos and virtual tours were universally valued by
                  all participants (9/9) as crucial features during online
                  property research.
                </p>
              </div>
            </div>

            <div className="card">
              <div>
                <h3>3/9</h3>
                <p>
                  3/4 commercial buyers expressed challenges in finding
                  specialized agents catering to their specific needs, leading
                  to a more extensive search process.
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
              I start by researching the market to understand the overall
              landscape, including the target audience, recent trends, and any
              gaps in knowledge. This helps in creating provisional personas and
              practical questions for primary research, ensuring a better
              understanding of user needs and preferences.
            </p>
          </div>

          <div>
            <h4>Sports Industry & Platforms</h4>
            <p>
              In real estate, digital tools play a big role. Almost all
              homebuyers (97%) use the internet for their property search. It's
              interesting that only 69% of agents have a website, showing
              there's room for more agents to go digital. Having an online
              presence is crucial, considering how many homebuyers rely on the
              internet to find their next home.
            </p>
          </div>

          <div>
            <h4>Demographics</h4>

            <ul className="styled-list">
              <li>
                A lot of home buyers fall into the Gen X category (1965-1979),
                with the group of Younger Boomers (1955-1964) right behind them.
              </li>
              <li>
                The majority of home buyers in 2023 fell within the age range of
                50 to 63 years old.
              </li>
              <li>
                The primary source of information for 86% of home buyers during
                their search for a new property was a real estate agent
              </li>
            </ul>
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
              With a solid understanding of our audience, including their goals
              and needs, I use user personas to represent important audience
              segments. This helps me focus on tackling the main challenges and
              meeting the primary needs of key user groups.
            </p>
          </div>

          <div className="img-wrapper">
            <img src={rprePersona} alt="hu-persona" />
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
            <img src={rpreProductGoals} alt="product-goals" />
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
              I translated my brainstormed solutions into a detailed list of
              product features to construct a comprehensive product roadmap.
              These features were categorized into four groups: Must-have (P1),
              Nice-to-Have (P2), and Surprising and Delightful (P3) features.
              The categorization was based on their alignment with both business
              and user objectives.
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
                <li>Property search</li>
                <li>Embedded map</li>
                <li>Property sorting</li>
                <li>Contact methods</li>
                <li>Residential services</li>
                <li>Commercial services</li>
                <li>Service highlights</li>
                <li>Team information page</li>
                <li>Testimonials</li>
              </ul>
            </div>

            <div>
              <h4>P2</h4>
              <ul className="unstyled-list">
                <li>Leave a review</li>
                <li>Virtual tours</li>
                <li>FAQ</li>
                <li>Property sorting/filter</li>
                <li>Notifications</li>
                <li>Social media sharing</li>
              </ul>
            </div>

            <div>
              <h4>P3</h4>
              <ul className="unstyled-list">
                <li>Analyticsd</li>
                <li>Calendar scheduling</li>
                <li>Blog</li>
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
            <img src={rprePrioritiedRoadmap} alt="prioritized-roadmap" />
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
              <img src={rpreUserFlow} alt="user-flow" />
            </div>
          </div>

          <div>
            <h4>Task Flow</h4>
            <div className="img-wrapper">
              <img src={rpreTaskFlow} alt="task-flow" />
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
          <div className="img-wrapper">
            <img src={rpreWireframes} alt="wireframes" />
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>18</h3>
          <h2>TYPOGRAPHY</h2>
        </div>

        <div className="content-wrapper">
          <div className="img-wrapper">
            <img src={rpreTypography} alt="typography" />
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="header-title">
          <h3>19</h3>
          <h2>PROTOTYPE</h2>
        </div>

        <div className="content-wrapper">
          <iframe
            title="prototype"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJ0DGhmBAEL8GhGYNnbBMB9%2FPatrea-Real-Estate%3Fpage-id%3D213%253A2%26type%3Ddesign%26node-id%3D213-383%26viewport%3D202%252C196%252C0.1%26t%3DtnqCeYUemcyrXViA-1%26scaling%3Dscale-down%26starting-point-node-id%3D213%253A383%26mode%3Ddesign&hide-ui=1"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
