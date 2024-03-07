import { ReactComponent as Arrow } from "../assets/landing/arrow.svg";
import {
  contentReadability,
  continuousImprovement,
  curriculumVsWeb,
  feedbackMethod,
  studentVsUser,
  userTesting,
} from "../assets";

export default function CurriculumDesign() {
  return (
    <div className="content-container">
      <div className="header-row">
        <div className="title-container">
          <div className="title">
            <p>Let's talk about:</p>
            <h1>CURRICULUM DESIGN</h1>
            <p>
              I started my design journey by working as a curriculum designer on
              a team creating curriculum for a web development course. Our aim
              was to give individuals the skills to navigate coding from basics
              to full-stack development.
            </p>
          </div>

          <div className="blue-diamonds">
            <div className="small-diamond">
              <div className="layer-4">
                <div className="layer-3">
                  <div className="layer-2">
                    <div className="layer-1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="large-diamond">
              <div className="layer-4">
                <div className="layer-3">
                  <div className="layer-2">
                    <div className="layer-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sections-grid">
        <div className="section">
          <h2>CURRICULUM DESIGN VS WEB DESIGN</h2>

          <div className="paragraph-container">
            <p>
              Curriculum design and web design share key principles, focusing on
              user-friendly experiences and clear communication.
            </p>
            <p>
              In both educational and digital contexts, common threads like
              user-centricity and iterative refinement shape effective learning
              experiences and seamless digital interactions.
            </p>
          </div>

          <img src={curriculumVsWeb} alt="curriculum vs web" />
        </div>

        <div className="section">
          <h2>DESIGNING FOR STUDENTS VS USERS</h2>

          <p>
            In curriculum design, the "user" is essentially the student. Despite
            being called by various titles, they share common fundamental
            traits. As a designer, I adhere to the same principles, ensuring
            that the design remains inherently "user-centered."
          </p>

          <img src={studentVsUser} alt="students vs users" />
        </div>

        <div className="section">
          <h2>CONTENT READABILITY & COHERENCE</h2>

          <div className="paragraph-container">
            <p>
              In curriculum design, clear content is essential for
              straightforward learning. When information is presented clearly
              and logically, students can easily grasp complex topics, reducing
              confusion and supporting effective understanding. This approach
              caters to diverse learning needs and styles.
            </p>

            <p>
              Improving content readability and coherence involves various
              approaches. In this example, I followed a specific workflow to
              identify and fill gaps while also reorganizing and clarifying
              unclear areas.
            </p>
          </div>

          <img src={contentReadability} alt="content flow" />
        </div>

        <div className="section">
          <h2>CONTINUOUS IMPROVEMENT</h2>

          <div className="paragraph-container">
            <p>
              In curriculum design, it is important to prioritize continuous
              improvement. I do this by utilizing user feedback and data-driven
              decisions for effectiveness.
            </p>

            <p>
              I start by creating the curriculum to meet goals, then test it in
              real situations and gather feedback. Based on this feedback, I
              make adjustments to strengthen the curriculum, ensuring it meets
              evolving needs and leads to better learning outcomes.
            </p>
          </div>

          <img src={continuousImprovement} alt="continuous improvement" />
        </div>

        <div className="section">
          <h2>USER TESTING AND FEEDBACK COLLECTION</h2>

          <div className="paragraph-container">
            <p>
              In the world of curriculum design, user feedback, often provided
              by students, is invaluable for fine-tuning the educational
              content. It offers insights into what works, what needs
              improvement, and what might be missing.
            </p>

            <p>
              Student feedback helps identify areas of confusion, gaps in
              understanding, or topics that need further clarification. It
              guides curriculum designers in adapting the content to better
              cater to the needs of the learners, resulting in a more effective
              and engaging learning experience.
            </p>
          </div>

          <img src={userTesting} alt="user testing feedback" />

          <div className="scroll-arrow">
            <p>scroll</p>
            <Arrow />
          </div>

          <div className="scrollable-rows">
            <div>
              <h2>01 - COLLECTION</h2>
              <p>
                Collect user feedback through various channels, such as surveys
                and feedback forms.
              </p>
            </div>

            <div>
              <h2>02 - ANALYSIS</h2>
              <p>
                Analyze and review collected feedback, identifying recurring
                patterns and common themes.
              </p>
            </div>

            <div>
              <h2>03 - PRIORIZATION</h2>
              <p>
                Prioritize areas for improvement based on their impact on user
                experience and business goals.
              </p>
            </div>

            <div>
              <h2>04 - IMPLEMENTATION</h2>
              <p>Implement proposed changes or updates to the design.</p>
            </div>

            <div>
              <h2>05 - COMMUNICATION</h2>
              <p>
                Communicate changes to users, emphasizing transparency and the
                value of their feedback.
              </p>
            </div>

            <div>
              <h2>06 - SOLICITATION</h2>
              <p>
                Continue to encourage users to provide feedback, especially
                regarding implemented changes.
              </p>
            </div>

            <div>
              <h2>07 - MONITORING</h2>
              <p>
                Define and monitor key performance indicators related to user
                experience, satisfaction, and business goals.
              </p>
            </div>

            <div>
              <h2>08 - ADAPTATION</h2>
              <p>
                Adapt the feedback loop process to changing user needs, market
                dynamics, and emerging trends.
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>CHOOSING A FEEDBACK METHOD</h2>

          <p>
            Being cautious about selecting feedback methods is crucial because
            it directly impacts the quality and relevance of the insights
            gathered, ultimately influencing the success of the design process
          </p>

          <img src={feedbackMethod} alt="feedback method" />
        </div>
      </div>
    </div>
  );
}
