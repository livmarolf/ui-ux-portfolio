import { ReactComponent as Line } from "../assets/icons/line.svg";
import curriculumVsWeb from "../assets/dark/curriculum-vs-web.png";
import fillGapsWorkflow from "../assets/dark/fill-gaps-workflow.png";

export default function CurriculumDesign() {
  return (
    <div className="content-container">
      <div className="header-row">
        <h1>CURRICULUM DESIGN</h1>
      </div>

      <div className="section-one">
        <div className="intro-left">
          <p>
            Crafting pathways, weaving user experiences. A foundation for UI/UX
            design.
          </p>
        </div>

        <div className="intro-right">
          <p>
            My design journey started as a curriculum designer leading the
            design for a Web Development course. The goal was to empower
            individuals with the skills to navigate coding from basics to
            full-stack development.
          </p>
        </div>
      </div>

      <div className="section-two">
        <div className="column-left">
          <h2>CURRICULUM DESIGN VS WEB DESIGN</h2>
        </div>

        <div className="column-right">
          <div>
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

          <img src={curriculumVsWeb} alt="curriculum-vs-web" />
        </div>
      </div>

      <div className="section-three">
        <div>
          <h2>DESIGNING FOR STUDENTS VS USERS</h2>
        </div>

        <div className="content-row">
          <div>
            <h3>Student</h3>
            <p>
              For students, design in curriculum means setting up a
              user-friendly learning space. It involves organizing content and
              using different teaching methods for effective learning. A
              well-designed curriculum makes it easy for students to access
              educational materials.
            </p>
          </div>

          <Line />

          <div>
            <h3>User</h3>
            <p>
              In web design, it's about creating a site that's easy for users to
              navigate. The design focuses on clear presentation and interactive
              features, making it straightforward for users to find what they
              need and engage with the website easily.
            </p>
          </div>
        </div>
      </div>

      <div className="section-four">
        <div>
          <h2>CONTENT READABILITY & COHERENCE</h2>
        </div>

        <div className="column-right">
          <div>
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

          <img src={fillGapsWorkflow} alt="fill-gaps-workflow" />
        </div>
      </div>

      <div className="section-five">
        <div className="content-row-top">
          <h2>CONTINUOUS IMPROVEMENT</h2>

          <p>
            In curriculum design, it is important to prioritize continuous
            improvement. I do this by utilizing user feedback and data-driven
            decisions for effectiveness.
          </p>
        </div>

        <div className="img-container">
          <img alt="continuous-improvement" />
        </div>
      </div>

      <div className="section-six">
        <h2>USER TESTING AND FEEDBACK COLLECTION</h2>

        <div className="caption">
          <p>
            In the world of curriculum design, user feedback, often provided by
            students, is invaluable for fine-tuning the educational content. It
            offers insights into what works, what needs improvement, and what
            might be missing.
          </p>

          <p>
            Student feedback helps identify areas of confusion, gaps in
            understanding, or topics that need further clarification. It guides
            curriculum designers in adapting the content to better cater to the
            needs of the learners, resulting in a more effective and engaging
            learning experience.
          </p>
        </div>

        <img alt="feedback-loop" />

        <div className="steps-container">
          <div>
            <h3>01 - COLLECTION</h3>
            <p>
              Collect user feedback through various channels, such as surveys
              and feedback forms.
            </p>
          </div>

          <div>
            <h3>02 - ANALYSIS</h3>
            <p>
              Analyze and review collected feedback, identifying recurring
              patterns and common themes.
            </p>
          </div>

          <div>
            <h3>03 - PRIORIZATION</h3>
            <p>
              Prioritize areas for improvement based on their impact on user
              experience and business goals.
            </p>
          </div>

          <div>
            <h3>04 - IMPLEMENTATION</h3>
            <p>Implement proposed changes or updates to the design.</p>
          </div>

          <div>
            <h3>05 - COMMUNICATION</h3>
            <p>
              Communicate changes to users, emphasizing transparency and the
              value of their feedback.
            </p>
          </div>

          <div>
            <h3>06 - SOLICITATION</h3>
            <p>
              Continue to encourage users to provide feedback, especially
              regarding implemented changes.
            </p>
          </div>

          <div>
            <h3>07 - MONITORING</h3>
            <p>
              Define and monitor key performance indicators related to user
              experience, satisfaction, and business goals.
            </p>
          </div>

          <div>
            <h3>08 - ADAPTATION</h3>
            <p>
              Adapt the feedback loop process to changing user needs, market
              dynamics, and emerging trends.
            </p>
          </div>
        </div>
      </div>

      <div className="section-seven">
        <div className="content-row-top">
          <h2>CHOOSING A FEEDBACK METHOD</h2>

          <p>
            Being cautious about selecting feedback methods is crucial because
            it directly impacts the quality and relevance of the insights
            gathered, ultimately influencing the success of the design process
          </p>
        </div>

        <div className="feedback-steps">
          <div>
            <div className="step-title">
              <h6>01</h6>
              <h5>DEFINE OBJECTIVES</h5>
            </div>
            <p>
              Define the specific goals and objectives for collecting user
              feedback. Clearly articulate what aspects of the design you need
              to be evaluated and/or improved.
            </p>
          </div>

          <div>
            <div className="step-title">
              <h6>02</h6>
              <h5>UNDERSTAND USERS</h5>
            </div>
            <p>
              Understand the target audience and create user personas to capture
              key demographic information, behaviors, and preferences. By
              defining the characteristics of the intended users, you can tailor
              feedback methods to better suit their needs and expectations.
            </p>
          </div>

          <div>
            <div className="step-title">
              <h6>03</h6>
              <h5>ASSESS TIMING</h5>
            </div>
            <p>
              Determine the most appropriate timing for collecting feedback in
              the design process. Whether it's during the early concept phase,
              mid-design iteration, or post-implementation, aligning feedback
              methods with the specific stage ensures relevance and
              effectiveness.
            </p>
          </div>

          <div>
            <div className="step-title">
              <h6>04</h6>
              <h5>CONSIDER DATA TYPE</h5>
            </div>
            <p>
              Think about the data needed for evaluation, whether it's numbers
              or opinions. Balancing metrics with insights gives a great
              understanding of user experiences and preferences.
            </p>
          </div>

          <div>
            <div className="step-title">
              <h6>05</h6>
              <h5>EVALUATE RESOURCES</h5>
            </div>
            <p>
              Evaluate available resources, including time, budget, and
              personnel. Select feedback methods that fit within these
              limitations, ensuring efficient implementation without
              compromising data quality.
            </p>
          </div>

          <div>
            <div className="step-title">
              <h6>06</h6>
              <h5>SELECT METHOD</h5>
            </div>
            <p>
              Based on the considerations outlined in the previous steps, select
              the most appropriate feedback method for your design project.
              Develop a plan for method implementation, including creating
              feedback tools, conducting pilot tests, and rolling out the chosen
              method to the wider user base.
            </p>
          </div>
        </div>
      </div>

      <div className="section-eight">
        <p>
          Enjoyed exploring the world of curriculum design? For questions or
          comments, don't hesitate to reach out—I'm here to connect!
        </p>

        <div className="cta-right">
          <p>
            Design is not just a profession for me; it's a passion. As you
            navigate through these pages, you'll find real-world experiences and
            a genuine commitment to enhancing user experiences. Whether you're
            an educator, administrator, or fellow enthusiast, let's continue
            this conversation. Share your thoughts, challenges, or ideas, and
            let's collaborate to create meaningful educational experiences
            together!
          </p>

          <div>
            <button>Let's Talk</button>
          </div>
        </div>
      </div>
    </div>
  );
}
