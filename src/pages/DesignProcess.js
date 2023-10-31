import background from "../assets/background-images/main.png";
import designGraphic from "../assets/design-graphic.svg";

export default function DesignProcess() {
  return (
    <div
      className="design-process"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="page-content">
        <div className="title-container">
          <div className="title">
            <h1>
              This is <span>My Design Process</span>
            </h1>

            <svg
              width="233"
              height="181"
              viewBox="0 0 233 181"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.25781 2C3.25781 1.17157 2.58624 0.5 1.75781 0.5C0.929385 0.5 0.257813 1.17157 0.257812 2L3.25781 2ZM231.877 170.528C232.463 169.942 232.463 168.992 231.877 168.406L222.331 158.86C221.745 158.275 220.796 158.275 220.21 158.86C219.624 159.446 219.624 160.396 220.21 160.982L228.695 169.467L220.21 177.952C219.624 178.538 219.624 179.488 220.21 180.074C220.796 180.659 221.745 180.659 222.331 180.074L231.877 170.528ZM0.257812 2C0.257813 65.1809 23.5789 107.558 64.259 134.053C104.819 160.47 162.436 170.967 230.817 170.967L230.817 167.967C162.638 167.967 105.726 157.481 65.8963 131.539C26.1867 105.676 3.25781 64.3191 3.25781 2L0.257812 2Z"
                fill="#D9D9D9"
              />
            </svg>
          </div>

          <div className="title-paragraph">
            <div className="title-content">
              <h6>INTRODUCTION</h6>

              <div className="paragraph-container">
                <p>
                  User experience (UX) design is far from a single-step task,
                  extending well beyond the act of simply opening a laptop and
                  creating wireframes!
                </p>

                <p>
                  The forthcoming process embodies my individual approach to UX
                  design, one that I consistently apply to each UX project I
                  take on.
                </p>

                <p>
                  This design methodology has evolved and matured over time
                  through my experience in the field.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="process-overview">
          <div className="arrow-heading">
            <h6>MY DESIGN PROCESS OVERVIEW</h6>
            <svg
              width="269"
              height="201"
              viewBox="0 0 269 201"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.937805 188.899C0.352017 189.485 0.352015 190.434 0.937801 191.02L10.4837 200.566C11.0695 201.152 12.0193 201.152 12.605 200.566C13.1908 199.98 13.1908 199.031 12.6051 198.445L4.11978 189.96L12.6051 181.474C13.1909 180.889 13.1909 179.939 12.6051 179.353C12.0193 178.767 11.0695 178.767 10.4838 179.353L0.937805 188.899ZM269 1.99976C269 1.17132 268.328 0.499752 267.5 0.499758C266.671 0.499764 266 1.17134 266 1.99975L269 1.99976ZM1.99846 191.46C104.598 191.46 171.396 174.467 212.55 142.16C253.803 109.776 269 62.2474 269 1.99976L266 1.99975C266 61.7523 250.946 108.204 210.698 139.8C170.352 171.473 104.4 188.46 1.99847 188.46L1.99846 191.46Z"
                fill="#D9D9D9"
              />
            </svg>
          </div>

          <div className="process-image">
            <img src={designGraphic} alt="design-graphic" />
          </div>
        </div>

        <div className="research">
          <div className="arrow-heading">
            <svg
              width="337"
              height="138"
              viewBox="0 0 337 138"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.99911 1.99964C2.99911 1.17121 2.32754 0.499636 1.49911 0.499636C0.670682 0.499636 -0.000890166 1.17121 -0.000890581 1.99964L2.99911 1.99964ZM335.979 127.131C336.563 126.544 336.561 125.594 335.974 125.01L326.41 115.483C325.823 114.898 324.873 114.9 324.288 115.487C323.704 116.074 323.705 117.023 324.292 117.608L332.795 126.076L324.326 134.579C323.741 135.166 323.743 136.115 324.33 136.7C324.917 137.285 325.867 137.283 326.452 136.696L335.979 127.131ZM-0.000890581 1.99964C-0.000891435 33.4686 12.227 57.1592 32.789 74.904C53.2925 92.5982 82.0181 104.33 114.992 112.128C180.928 127.72 264.472 127.712 334.919 127.572L334.913 124.572C264.371 124.712 181.207 124.704 115.682 109.208C82.9252 101.462 54.7319 89.8777 34.749 72.6328C14.8248 55.4385 2.99911 32.567 2.99911 1.99964L-0.000890581 1.99964Z"
                fill="#D9D9D9"
              />
            </svg>
            <h6>01 RESEARCH</h6>
          </div>

          <div className="research-content">
            <p>
              The Research stage is where you dive deep into learning everything
              about:
            </p>

            <ol type="A">
              <li>
                <span>The business</span> you're creating a product for
              </li>
              <li>
                <span>The people</span> who will use the product, also known as
                the users
              </li>
            </ol>

            <p>On the Business side:</p>

            <ul>
              <li>
                <span>Stakeholder Interviews</span> - interviews with the
                client(s)
              </li>
              <li>
                <span>Competitive Benchmarking</span> - reviewing best practices
                from the competition
              </li>
            </ul>

            <p>On the User side:</p>

            <ul>
              <li>
                <span>User Interviews</span> - Interview with the product’s
                users/audience
              </li>
              <li>
                <span>Surveys</span> - Questionnaires that help gather
                qualitative data{" "}
              </li>
              <li>
                <span>Personas</span> - Fictional characters that represent
                subsets of users
              </li>
            </ul>
          </div>
        </div>

        <div className="strategize">
          <div className="arrow-heading">
            <h6>02 STRATEGIZE</h6>
            <svg
              width="270"
              height="201"
              viewBox="0 0 270 201"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.01788 188.899C0.432095 189.485 0.432094 190.434 1.01788 191.02L10.5638 200.566C11.1496 201.152 12.0993 201.152 12.6851 200.566C13.2709 199.98 13.2709 199.031 12.6851 198.445L4.19986 189.96L12.6852 181.474C13.2709 180.889 13.2709 179.939 12.6852 179.353C12.0994 178.767 11.1496 178.767 10.5638 179.353L1.01788 188.899ZM269.08 1.99976C269.08 1.17132 268.408 0.499752 267.58 0.499758C266.751 0.499764 266.08 1.17134 266.08 1.99975L269.08 1.99976ZM2.07854 191.46C104.678 191.46 171.476 174.467 212.631 142.16C253.883 109.776 269.08 62.2474 269.08 1.99976L266.08 1.99975C266.08 61.7523 251.026 108.204 210.778 139.8C170.432 171.473 104.48 188.46 2.07854 188.46L2.07854 191.46Z"
                fill="#D9D9D9"
              />
            </svg>
          </div>

          <div className="strat-content">
            <p>Strategizing prior to the design stage is crucial because it:</p>

            <ul>
              <li>Ensures alignment with business goals and user needs</li>
              <li>Identifies potential challenges early on</li>
              <li>Minimizes the risk of costly revisions</li>
            </ul>
            <div className="output-list">
              <p>The output of the Strategize phase includes:</p>
              <ul>
                <li>
                  <span>Product Goals</span> - An outline defining specific
                  objectives and targets
                </li>
                <li>
                  <span>Product Roadmap</span> - A visual plan outlining product
                  development goals, features, and timeline
                </li>
                <li>
                  <span>Site Map</span> - A visual depiction of the product's
                  hierarchical content structure
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="design">
          <div className="arrow-heading">
            <svg
              width="337"
              height="138"
              viewBox="0 0 337 138"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.57919 2.20178C3.57919 1.37336 2.90761 0.701785 2.07919 0.701785C1.25076 0.701784 0.579188 1.37336 0.579188 2.20178L3.57919 2.20178ZM336.559 127.333C337.143 126.746 337.141 125.796 336.554 125.212L326.99 115.685C326.403 115.1 325.453 115.102 324.868 115.689C324.284 116.276 324.286 117.226 324.873 117.81L333.375 126.279L324.906 134.781C324.322 135.368 324.323 136.317 324.91 136.902C325.497 137.487 326.447 137.485 327.032 136.898L336.559 127.333ZM0.579188 2.20178C0.579187 33.6707 12.807 57.3614 33.3691 75.1062C53.8726 92.8004 82.5981 104.532 115.572 112.33C181.508 127.923 265.052 127.914 335.499 127.774L335.493 124.774C264.951 124.914 181.787 124.906 116.262 109.41C83.5053 101.664 55.3119 90.0799 35.3291 72.835C15.4049 55.6407 3.57919 32.7692 3.57919 2.20178L0.579188 2.20178Z"
                fill="#D9D9D9"
              />
            </svg>
            <h6>03 DESIGN</h6>
          </div>

          <div className="design-content">
            <p>
              One of the most gratifying phases in the journey, the design
              stage, truly breathes life into the product. It's the juncture
              where the insights and discoveries gleaned from research are
              skillfully applied to craft a concrete design.
            </p>

            <p>
              The outcomes of this pivotal design stage, often called
              deliverables, include:
            </p>

            <ul>
              <li>
                <span>User Flow</span> - A visual representation of a user's
                journey
              </li>
              <li>
                <span>Wireframes</span> - Basic, visual blueprints outlining a
                website or app's structure
              </li>
              <li>
                <span>Prototype</span> - A preliminary, interactive model
                showcasing the user interface and functionality of a product
              </li>
            </ul>
          </div>
        </div>

        <div className="test">
          <div className="arrow-heading">
            <h6>04 TEST</h6>
            <svg
              width="270"
              height="201"
              viewBox="0 0 270 201"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.01788 188.899C0.432095 189.485 0.432094 190.434 1.01788 191.02L10.5638 200.566C11.1496 201.152 12.0993 201.152 12.6851 200.566C13.2709 199.98 13.2709 199.031 12.6851 198.445L4.19986 189.96L12.6852 181.474C13.2709 180.889 13.2709 179.939 12.6852 179.353C12.0994 178.767 11.1496 178.767 10.5638 179.353L1.01788 188.899ZM269.08 1.99976C269.08 1.17132 268.408 0.499752 267.58 0.499758C266.751 0.499764 266.08 1.17134 266.08 1.99975L269.08 1.99976ZM2.07854 191.46C104.678 191.46 171.476 174.467 212.631 142.16C253.883 109.776 269.08 62.2474 269.08 1.99976L266.08 1.99975C266.08 61.7523 251.026 108.204 210.778 139.8C170.432 171.473 104.48 188.46 2.07854 188.46L2.07854 191.46Z"
                fill="#D9D9D9"
              />
            </svg>
          </div>
          <div className="test-content">
            <p>
              The Test stage in UX design is an essential step in the iterative
              design process, ensuring that the final product is user-friendly,
              functional, and aligned with both user expectations and business
              objectives. It helps identify and resolve issues before launch,
              ultimately leading to a better user experience.
            </p>

            <p>
              What does the testing stage look like? In my approach, I divide it
              into the following steps:
            </p>

            <ul>
              <li>
                <span>Plan</span> - Create a test plan
              </li>
              <li>
                <span>Conduct</span> - Carry out the test
              </li>
              <li>
                <span>Report</span> - Analyze and document results
              </li>
              <li>
                <span>Optimize</span> - Refine the designs based on the outcomes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
