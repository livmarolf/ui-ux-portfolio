import { Link } from "react-router-dom";
import designProcess from "../../assets/dark/design-process.png";
import rprePersona from "../../assets/images/rpre-persona.png";
import rpreMap from "../../assets/images/rpre-map.png";
import userTaskFlow from "../../assets/images/rpre-flow.png";
import rpreWireframes from "../../assets/images/rpre-wireframes.png";
import rpreGoals from "../../assets/images/rpre-goals.png";

export default function HuddleUp() {
  return (
    <div className="page-content">
      <div className="header-row">
        <h1>CASE STUDY 02</h1>
      </div>

      <div className="title-container">
        <h1 className="large-header">REAL PATREA REAL ESTATE</h1>
      </div>

      <div className="grey-header">
        <h2>PROJECT OVERVIEW</h2>
      </div>

      <div className="overview-container">
        <div className="content-section">
          <h2>THE CHALLENGE</h2>

          <div>
            <p>
              Real estate agents encounter a practical challenge in maintaining
              effective communication channels with both existing and potential
              clients. Traditional communication methods like phone calls and
              emails often prove inadequate in meeting the evolving expectations
              of today's clients. Agents need to be not only accessible but also
              capable of delivering a personalized and engaging experience. In
              an increasingly competitive industry, there's a growing demand for
              practical solutions that help agents efficiently navigate property
              transactions while fostering meaningful client connections.
            </p>

            <p>
              The constant influx of new clients seeking information and updates
              adds another layer to the challenge. Agents must find a balance
              between time management and ensuring each client feels valued. The
              ongoing shift to a digital-first approach requires a rethinking of
              how real estate professionals interact with clients. This
              practical challenge highlights the pivotal role of UI/UX design in
              creating solutions that simplify agent workflows, enhance overall
              accessibility, and improve client engagement, ultimately
              transforming the real estate experience.
            </p>
          </div>
        </div>

        <div className="content-section">
          <h2>THE OBJECTIVE</h2>

          <p>
            Develop a user-centric website aiming to enhance business efficiency
            and elevate the overall client experience for both existing and
            prospective clients
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
              <p>High-fidelity interactive prototype for key tasks</p>
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
                <li>Miro</li>
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
              <Link className="link-button" to="/design-process">
                Learn More
              </Link>
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
              Research involves understanding user behaviors, motivations,
              challenges, aspirations, constraints, and objectives – crucial for
              practical solutions in later project phases. A well-thought-out
              research plan is essential to guide responsive website design
              effectively. This plan outlines research goals, inquiries,
              methods, participants, and establishes a clear timeline for smooth
              execution.
            </p>

            <div>
              <h3>Research Goals</h3>

              <ul>
                <li>
                  Understand the market of platforms related to real estate
                </li>
                <li>Identify the target audience</li>
                <li>
                  Gather insights on how key competitors address customer needs
                </li>
                <li>
                  Get to know how real estate agents are streamlining their
                  client’s experience
                </li>
                <li>
                  Uncover people's experience interacting with real estate
                  platforms
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
                Start with market research to understand the broader market
                landscape, including the target audience, knowledge gaps, recent
                trends, and news. These insights will help create provisional
                personas and formulate practical questions for primary research.
                This approach ensures a clear understanding of user needs and
                preferences.
              </p>
            </div>

            <div>
              <h3>Real Estate Industry & Platforms</h3>

              <p>
                In real estate, digital tools play a big role. Almost all
                homebuyers (97%) use the internet for their property search.
                It's interesting that only 69% of agents have a website, showing
                there's room for more agents to go digital. Having an online
                presence is crucial, considering how many homebuyers rely on the
                internet to find their next home.
              </p>
            </div>

            <div>
              <h3>Demographics</h3>

              <ul className="unstyled-list">
                <li>
                  A lot of home buyers fall into the Gen X category (1965-1979),
                  with the group of Younger Boomers (1955-1964) right behind
                  them.
                </li>

                <li>
                  The majority of home buyers in 2023 fell within the age range
                  of 50 to 63 years old.
                </li>

                <li>
                  The primary source of information for 86% of home buyers
                  during their search for a new property was a real estate agent
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>PRIMARY RESEARCH</h2>

          <div className="content">
            <p>
              I went beyond my basic market understanding and had more
              meaningful conversations with our user community, which helped me
              gather direct insights through primary research methods.I built on
              my basic market understanding by diving deeper and having more
              meaningful interactions with our user community. This helped me
              gather direct insights through practical research methods.
            </p>

            <div>
              <h3>Questions Asked While Interviewing</h3>

              <ul>
                <li>
                  Can you share your recent experiences in searching for a real
                  estate agent or property? What challenges did you face during
                  this process?
                </li>
                <li>
                  What criteria do you consider when evaluating real estate
                  agents online?Have you encountered any difficulties in
                  navigating real estate websites? If so, what specific issues
                  did you face?
                </li>
                <li>
                  When researching properties online, what features or
                  information are most important to you?
                </li>
                <li>
                  Can you describe a positive experience you've had with a real
                  estate website? What made it stand out to you?
                </li>
                <li>
                  How do you prefer to communicate with real estate agents
                  during your property search? (Email, phone calls, live chat,
                  etc.)
                </li>
                <li>
                  In what ways do you typically utilize technology or online
                  platforms in your home-buying process?
                </li>
                <li>
                  What factors influence your decision to choose a particular
                  real estate agent?
                </li>
                <li>
                  Have you ever abandoned a real estate website during your
                  search? If so, what led to that decision?
                </li>
              </ul>
            </div>

            <div>
              <h3>User Interviews</h3>

              <p>
                Nine participants were interviewed, comprising both potential
                home buyers (5/9) and potential commercial buyers (4/9). Here
                are the key takeaways:
              </p>

              <ul>
                <li>
                  8/9 participants found it challenging to sift through the vast
                  amount of online information to find properties that suited
                  their needs
                </li>
                <li>
                  Several participants (7/9), both home and commercial buyers,
                  mentioned difficulties in navigating real estate websites,
                  particularly in terms of complex filters and unintuitive
                  navigation menus.
                </li>
                <li>
                  Property photos and virtual tours were universally valued by
                  all participants (9/9) as crucial features during online
                  property research.
                </li>
                <li>
                  3/4 commercial buyers expressed challenges in finding
                  specialized agents catering to their specific needs, leading
                  to a more extensive search process.
                </li>
              </ul>
            </div>

            <div>
              <h3>User Persona</h3>

              <p>
                With a solid understanding of our audience, including their
                goals and needs, I use user personas to represent important
                audience segments. This helps me focus on tackling the main
                challenges and meeting the primary needs of key user groups.
              </p>

              <img src={rprePersona} alt="persona" />
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>STRATEGY</h2>

          <div className="content">
            <div>
              <h3>Product Goals</h3>

              <p>
                I've decided to outline project goals to steer the product's
                development and help decide which features to include in the
                mobile app. These goals come from a mix of user needs from the
                persona and practical business objectives gathered from all
                available information.
              </p>
            </div>

            <img src={rpreGoals} alt="product-goals" />
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
              <h3>P2</h3>

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
              <h3>P3</h3>

              <ul className="unstyled-list">
                <li>Analytics</li>
                <li>Calendar scheduling</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>PRODUCT MAP</h2>

          <div className="content">
            <img className="scaled-down-img" src={rpreMap} alt="product-map" />
          </div>
        </div>

        <div className="content-section">
          <h2>USER AND TASK FLOW</h2>

          <div className="content">
            <p>
              I developed the user task flow for property searches, a key
              feature on the site. This flow helps users find properties that
              match their search criteria, then contact the realtor to view.
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
              efficient interfaces. Explore some of the HuddleUp wireframes
              below.
            </p>

            <img src={rpreWireframes} alt="rpre-wireframes" />
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
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJ0DGhmBAEL8GhGYNnbBMB9%2FPatrea-Real-Estate%3Fpage-id%3D213%253A2%26type%3Ddesign%26node-id%3D213-383%26viewport%3D272%252C205%252C0.17%26t%3DFLtyOQpjnbzHuJHs-1%26scaling%3Dscale-down%26starting-point-node-id%3D213%253A383%26mode%3Ddesign&hide-ui=1"
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
              In conclusion, the case study for the real estate agent's website
              demonstrates a user-focused approach that emphasizes ease of use
              and accessibility. Through careful analysis of user behaviors, the
              design created is an intuitive interface that facilitates seamless
              navigation for both agents and clients. This case study highlights
              the importance of thoughtful design in enhancing digital platforms
              for the real estate industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
