import { pageData } from "../data/CaseStudies";
import { useParams } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import ProgressCircle from "./motion/ProgressCircle";

const Page = ({ content }) => {
  console.log(content);

  return (
    <div className="page-container">
      <ProgressCircle />
      <Navbar />

      <div className="title">
        <div className="heading">
          <div className="title-text">
            <h1>{content.title}</h1>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10.5"
                cy="10.5"
                r="9.5"
                stroke="#7E7E7E"
                strokeWidth="2"
              />
              <path
                d="M12.34 4V17.2H10.12V6.52L7.02 8.52L6 6.86L10.3 4H12.34Z"
                fill="#7E7E7E"
              />
            </svg>
          </div>

          <p>{content.description}</p>
        </div>
      </div>

      <div className="cover-container">
        <img src={content.cover} alt="cover" />
      </div>

      <div className="content-container">
        <section className="right">
          <div className="content">
            <p className="header-number">[ 01 ]</p>

            <p>{content.overview}</p>
          </div>

          <div className="header">
            <h1>PRODUCT OVERVIEW</h1>
          </div>
        </section>

        <section className="long">
          <div className="long-header">
            <h1>RESPONSIBILITIES</h1>
            <p className="header-number">[ 02 ]</p>
          </div>

          <div className="content">
            <ul className="unstyled-list">
              {content.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="right">
          <div className="content">
            <p className="header-number">[ 03 ]</p>

            <ul className="unstyled-list">
              {content.tools.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="header">
            <h1>TOOLS</h1>
          </div>
        </section>

        <section className="left">
          <div>
            <h1>PROBLEM STATEMENT</h1>
          </div>

          <div className="content">
            <p className="header-number">[ 04 ]</p>

            <p>{content.problemStatement}</p>
          </div>
        </section>

        <section className="long">
          <div className="long-header">
            <p className="header-number">[ 05 ]</p>
            <h1>DELIVERABLES</h1>
          </div>

          <div className="content">
            <div className="bordered-list">
              {content.deliverables.slice(0, 4).map((item, index) => (
                <div key={index} className="list-row">
                  <p>{item}</p>
                  <p className="bullet">[{index + 1}]</p>
                </div>
              ))}
            </div>

            <div className="bordered-list">
              {content.deliverables.slice(4).map((item, index) => (
                <div key={index} className="list-row">
                  <p>{item}</p>
                  <p className="bullet">[{index + 5}]</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="long">
          <div className="long-header">
            <h1>DESIGN PROCESS</h1>
            <p className="header-number">[ 06 ]</p>
          </div>

          <div className="content">
            <div className="design-process">
              {content.designProcess.slice(0, 2).map((process, index) => (
                <div key={index} className="process">
                  <div className="step-header">
                    <div className="process-title">
                      <h1>{process.listTitle}</h1>
                      <p>0{index + 1}</p>
                    </div>
                    <div className="divider"></div>
                    <div className="underline"></div>
                    <div className="line"></div>
                  </div>

                  {process.listItems &&
                  typeof process.listItems[0] === "object" ? (
                    process.listItems.map((item, subIndex) => (
                      <div key={subIndex} className="list-items">
                        <h2>{item.subTitle}</h2>
                        <ul>
                          {item.listContent.map((contentItem, contentIndex) => (
                            <li key={contentIndex}>{contentItem}</li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <div className="list-items">
                      <ul>
                        {process.listItems.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="design-process">
              {content.designProcess.slice(2).map((process, index) => (
                <div key={index} className="process">
                  <div className="step-header">
                    <div className="process-title">
                      <h1>{process.listTitle}</h1>
                      <p>0{index + 3}</p>
                    </div>
                    <div className="divider"></div>
                    <div className="underline"></div>
                    <div className="line"></div>
                  </div>

                  {process.listItems &&
                  typeof process.listItems[0] === "object" ? (
                    process.listItems.map((item, subIndex) => (
                      <div key={subIndex} className="list-items">
                        <h2>{item.subTitle}</h2>
                        <ul>
                          {item.listContent.map((contentItem, contentIndex) => (
                            <li key={contentIndex}>{contentItem}</li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <div className="list-items">
                      <ul>
                        {process.listItems.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="right">
          <div className="content">
            <p className="header-number">[ 07 ]</p>

            <div className="content-wrapper">
              <p>{content.researchPlan.titleParagraph}</p>

              <div className="">
                <p className="sub-header">[ RESEARCH PLAN ]</p>
                <ul className="bordered-list">
                  {content.researchPlan.researchGoals.map((item, i) => (
                    <div className="list-row">
                      <li key={i}>{item}</li>
                      <p className="bullet">[•]</p>
                    </div>
                  ))}
                </ul>
              </div>

              <div>
                <p className="sub-header">[ METHODOLOGIES ]</p>
                <ul className="bordered-list">
                  {content.researchPlan.methodologies.map((item, i) => (
                    <div className="list-row">
                      <li key={i}>{item}</li>
                      <p className="bullet">[•]</p>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="header">
            <h1>RESEARCH PLAN</h1>
          </div>
        </section>

        <section className="left">
          <div>
            <h1>TARGET AUDIENCE</h1>
          </div>

          <div className="content">
            <p className="header-number">[ 08 ]</p>

            <p>{content.problemStatement}</p>
          </div>
        </section>

        <section className="long">
          <div className="long-header">
            <p className="header-number">[ 09 ]</p>
            <h1>USER INTERVIEWS</h1>
          </div>

          <div className="content">
            <p>{content.userInterviews.titleParagraph}</p>
          </div>

          <div className="sub-section">
            <p className="sub-header">[ QUESTIONS ASKED WHILE INTERVIEWING ]</p>

            <div className="content padded">
              <div className="bordered-list">
                {content.userInterviews.questions.map(
                  (item, index, { length }) =>
                    index < Math.ceil(length / 2) && (
                      <div key={index} className="list-row centered">
                        <p className="item">{item}</p>
                        <p className="bullet">[•]</p>
                      </div>
                    )
                )}
              </div>

              <div className="bordered-list">
                {content.userInterviews.questions.map(
                  (item, index, { length }) =>
                    index >= Math.ceil(length / 2) && (
                      <div key={index} className="list-row centered">
                        <p>{item}</p>
                        <p className="bullet">[•]</p>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>

          <div className="sub-section">
            <p className="sub-header">[ INTERVIEW RESULTS ]</p>

            <div className="content">
              <div>
                {content.userInterviews.userInterviewsTiles
                  .slice(0, 2)
                  .map((tile, index) => (
                    <div key={index}>
                      <p className="accent">{tile.fraction}</p>
                      <p>{tile.content}</p>
                    </div>
                  ))}
              </div>

              <div>
                {content.userInterviews.userInterviewsTiles
                  .slice(2, 4)
                  .map((tile, index) => (
                    <div key={index}>
                      <p className="accent">{tile.fraction}</p>
                      <p>{tile.content}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="content"></div>
        </section>

        <section className="left">
          <div>
            <h1>MARKET RESEARCH</h1>
          </div>

          <div className="content">
            <p className="header-number">[ 10 ]</p>

            <p>{content.marketResearch.titleParagraph}</p>

            <div className="content-wrapper">
              <div>
                <p className="sub-header">[ INDUSTRY AND PLATFORMS ]</p>
                <p>{content.marketResearch.researchContext}</p>
              </div>

              <div>
                <p className="sub-header">[ DEMOGRAPHICS ]</p>
                <div>
                  <ul className="bordered-list">
                    {content.marketResearch.demographics.map((item, i) => (
                      <div className="list-row">
                        <li key={i}>{item}</li>
                        <p className="bullet">[•]</p>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {content.competitiveResearch && (
          <section className="long">
            <div className="long-header">
              <h1>COMPETITIVE ANALYSIS</h1>
              <p className="header-number">[ 11 ]</p>
            </div>

            <p>{content.competitiveResearch.titleParagraph}</p>

            <div className="content">
              {content.competitiveResearch.researchTable.map(
                (column, index) => (
                  <div key={index} className="column">
                    <p className="sub-header">[ {column.columnTitle} ]</p>

                    <div className="strengths">
                      <p className="list-header">STRENGTHS</p>
                      <ul className="bordered-list">
                        {column.strengths.map((strength, index) => (
                          <div className="list-row">
                            <li key={index}>{strength}</li>
                            <p className="bullet">[•]</p>
                          </div>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="list-header">WEAKNESSES</p>
                      <ul className="bordered-list">
                        {column.weaknesses.map((weakness, index) => (
                          <div className="list-row">
                            <li key={index}>{weakness}</li>
                            <p className="bullet">[•]</p>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              )}
            </div>
          </section>
        )}

        <section className="right">
          <div className="content">
            <p className="header-number">[ 12 ]</p>

            <div className="content-wrapper">
              <p>{content.userPersona.titleParagraph}</p>

              <div className="image-container persona">
                <img src={content.userPersona.personaImage} alt="persona" />
              </div>

              <ul className="bordered-list">
                {Object.entries(content.userPersona.bio).map(([key, value]) => (
                  <div className="list-row">
                    <li key={key} className="spaced">
                      <p>{key}</p>
                      <p>{value}</p>
                    </li>
                    <p className="bullet">[•]</p>
                  </div>
                ))}
              </ul>

              <div>
                <p className="sub-header">[ QUOTE ]</p>
                <p>{content.userPersona.quote}</p>
              </div>

              <div>
                <p className="sub-header">[ BACKGROUND ]</p>
                <p>{content.userPersona.background}</p>
              </div>

              <div>
                <p className="sub-header">[ GOALS ]</p>
                <ul className="bordered-list">
                  {content.userPersona.goals.map((goal, index) => (
                    <div className="list-row">
                      <li key={index}>
                        <p>{goal}</p>
                      </li>
                      <p className="bullet">[•]</p>
                    </div>
                  ))}
                </ul>
              </div>

              <div>
                <p className="sub-header">[ FRUSTRATIONS ]</p>
                <ul className="bordered-list">
                  {content.userPersona.frustrations.map(
                    (frustration, index) => (
                      <div className="list-row">
                        <li key={index}>
                          <p>{frustration}</p>
                        </li>
                        <p className="bullet">[•]</p>
                      </div>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="header">
            <h1>USER PERSONA</h1>
          </div>
        </section>

        <section className="left">
          <div>
            <h1>PRODUCT GOALS</h1>
          </div>

          <div className="content">
            <p className="header-number">[ 13 ]</p>

            <div className="content-wrapper">
              <div>
                <p>{content.productGoals.titleParagraph[0]}</p>
                <p>{content.productGoals.titleParagraph[1]}</p>
              </div>

              <div>
                <p className="sub-header">[ BUSINESS GOALS ]</p>
                <div>
                  <ul className="bordered-list">
                    {content.productGoals.businessGoals.map((item, i) => (
                      <div className="list-row">
                        <li key={i}>{item}</li>
                        <p className="bullet">[•]</p>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <p className="sub-header">[ BOTH ]</p>
                <div>
                  <ul className="bordered-list">
                    {content.productGoals.both.map((item, i) => (
                      <div className="list-row">
                        <li key={i}>{item}</li>
                        <p className="bullet">[•]</p>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <p className="sub-header">[ USER GOALS ]</p>
                <div>
                  <ul className="bordered-list">
                    {content.productGoals.userGoals.map((item, i) => (
                      <div className="list-row">
                        <li key={i}>{item}</li>
                        <p className="bullet">[•]</p>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="long">
          <div className="long-header">
            <p className="header-number">[ 14 ]</p>
            <h1>PRIORITIZED ROADMAP</h1>
          </div>

          <div className="content">
            <p>{content.prioritizedRoadmap.titleParagraph}</p>

            <div className="content-wrapper">
              <div>
                <p className="sub-header">[ P1 ]</p>
                <div className="bordered-list">
                  {content.prioritizedRoadmap.phaseOne.map((item, index) => (
                    <div key={index} className="list-row">
                      <p>{item}</p>
                      <p className="bullet">[•]</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="sub-header">[ P2 ]</p>
                <div className="bordered-list">
                  {content.prioritizedRoadmap.phaseTwo.map((item, index) => (
                    <div key={index} className="list-row">
                      <p>{item}</p>
                      <p className="bullet">[•]</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="sub-header">[ P3 ]</p>
                <div className="bordered-list">
                  {content.prioritizedRoadmap.phaseThree.map((item, index) => (
                    <div key={index} className="list-row">
                      <p>{item}</p>
                      <p className="bullet">[•]</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="left">
          <div>
            <h1>SITEMAP</h1>
          </div>

          <div className="content">
            <p className="header-number">[ 15 ]</p>

            <div className="image-container">
              <img src={content.siteMap.siteMapImage} alt="sitemap" />
            </div>
          </div>
        </section>

        <section className="long">
          <div className="long-header">
            <p className="header-number">[ 16 ]</p>
            <h1>USER AND TASK FLOWS</h1>
          </div>

          <p className="half-width">{content.userAndTaskFlow.titleParagraph}</p>
          <div className="content">
            <div>
              <p className="sub-header">[ USER FLOW ]</p>
              <div className="image-container">
                <img
                  src={content.userAndTaskFlow.userFlowImage}
                  alt="user-flow"
                />
              </div>
            </div>

            <div>
              <p className="sub-header">[ TASK FLOW ]</p>

              <div className="image-container">
                <img
                  src={content.userAndTaskFlow.taskFlowImage}
                  alt="task-flow"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="left">
          <div>
            <h1>WIREFRAMES</h1>
          </div>

          <div className="content">
            <p className="header-number">[ 17 ]</p>

            <div className="image-grid">
              {content.wireframes.map((src, index) => (
                <img key={index} src={src} alt={`Wireframe ${index + 1}`} />
              ))}
            </div>
          </div>
        </section>

        {/* <section className="right">
          <div className="content">
            <p className="header-number">[ 18 ]</p>

            <p className="sub-header">[ COLOR PALLETE ]</p>

            <div className="image-container">
              <img src={content.typographyImage} alt="typography" />
            </div>
          </div>

          <div className="header">
            <h1>TYPOGRAPHY</h1>
          </div>
        </section> */}

        <section className="left">
          <div>
            <h1>PROTOTYPE</h1>
          </div>

          <div className="content">
            <p className="header-number">[ 18 ]</p>
            <p className="sub-header">[ CLICK TO VIEW ]</p>

            <div className="image-container prototype">
              <a href={content.prototypeLink} target="_blank" rel="noreferrer">
                <img src={content.highFidelityImage} alt="high-fi" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const CaseStudy = () => {
  const { slug } = useParams();
  const content = pageData[slug];

  return content ? <Page content={content} /> : <div>Page not found</div>;
};

export default CaseStudy;
