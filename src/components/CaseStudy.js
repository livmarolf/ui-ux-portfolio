import { Link } from "react-router-dom";
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
        <Link to={"/"}>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="58.5"
              y="58.5"
              width="57"
              height="57"
              rx="28.5"
              transform="rotate(180 58.5 58.5)"
              stroke="#767676"
              stroke-width="3"
            />
            <path
              d="M25.7824 19.4635L15.2461 29.9998L25.7824 40.5361"
              stroke="#767676"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M44.7564 30L15.543 30"
              stroke="#767676"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>

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
        <div className="section">
          <div className="header">
            <p>01</p>
            <h1>PRODUCT OVERVIEW</h1>
          </div>

          <div>
            <div className="overview">
              <p>{content.overview}</p>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="header">
            <p>02</p>
            <h1>RESPONSIBILITIES</h1>
          </div>

          <div>
            <div className="responsibilities">
              <ul>
                {content.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="header">
            <p>03</p>
            <h1>TOOLS</h1>
          </div>

          <div>
            <div className="tools-container">
              {content.tools.map((path, index) => (
                <img key={index} src={path} alt={`number ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="section">
          <div className="header">
            <p>04</p>
            <h1>PROBLEM STATEMENT</h1>
          </div>

          <div>
            <div className="problem-statement">
              <p>{content.problemStatement}</p>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="header">
            <p>05</p>
            <h1>DELIVERABLES</h1>
          </div>

          <div>
            <div className="deliverables">
              {content.deliverables.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="section">
          <div className="header">
            <p>06</p>
            <h1>DESIGN PROCESS</h1>
          </div>

          <div>
            <div className="process-container">
              {content.designProcess.map((process, index) => (
                <div key={index} className="process">
                  <div className="process-title">
                    <p>0{index + 1}</p>
                    <h1>{process.listTitle}</h1>
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
        </div>

        <div className="section">
          <div className="header">
            <p>07</p>
            <h1>RESEARCH PLAN</h1>
          </div>

          <div>
            <div className="research">
              <p>{content.researchPlan.titleParagraph}</p>

              <div className="lists">
                <div>
                  <p>RESEARCH GOALS</p>
                  <ul title="Research Goals">
                    {content.researchPlan.researchGoals.map((goal, index) => (
                      <li key={index}>{goal}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p>METHODOLOGIES</p>
                  <ul title="Methodologies">
                    {content.researchPlan.methodologies.map((method, index) => (
                      <li key={index}>{method}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="header">
            <p>08</p>
            <h1>TARGET AUDIENCE</h1>
          </div>

          <div>
            <div className="target">
              <p>{content.targetAudience}</p>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="header">
            <p>09</p>
            <h1>USER INTERVIEWS</h1>
            <h2>(PRIMARY RESEARCH)</h2>
          </div>

          <div>
            <div className="interviews">
              <p>{content.userInterviews.titleParagraph}</p>

              <div className="questions">
                <p>Questions Asked While Interviewing</p>
                <ul>
                  {content.userInterviews.questions.map((question, index) => (
                    <li key={index}>{question}</li>
                  ))}
                </ul>
              </div>

              <div className="results">
                <p className="accent">User Interviews</p>
                <p>{content.userInterviews.userInterviewParagraph}</p>

                <div className="results-tiles">
                  {content.userInterviews.userInterviewsTiles.map(
                    (tile, index) => (
                      <div key={index}>
                        <p className="accent">{tile.fraction}</p>
                        <p>{tile.content}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="header">
            <p>10</p>
            <h1>MARKET RESEARCH</h1>
            <h2>(SECONDARY RESEARCH)</h2>
          </div>

          <div>
            <div className="market">
              <p>{content.marketResearch.titleParagraph}</p>

              <div>
                <p className="accent">Industry and Platforms</p>
                <p>{content.marketResearch.researchContext}</p>
              </div>

              <div>
                <p className="accent">Demographics</p>
                <div className="demographics">
                  {content.marketResearch.demographics.map((demo, index) => (
                    <p key={index}>{demo}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="header">
            <p>11</p>
            <h1>COMPETITIVE RESEARCH</h1>
          </div>

          <div>
            <div className="competitive-research">
              <p>{content.competitiveResearch.titleParagraph}</p>

              <div className="research-table">
                {content.competitiveResearch.researchTable.map(
                  (column, index) => (
                    <div key={index} className="column">
                      <h1 className="column-title">{column.columnTitle}</h1>

                      <h2>STRENGTHS</h2>
                      <ul>
                        {column.strengths.map((strength, index) => (
                          <li key={index}>{strength}</li>
                        ))}
                      </ul>

                      <h2>WEAKNESSES</h2>
                      <ul>
                        {column.weaknesses.map((weakness, index) => (
                          <li key={index}>{weakness}</li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="header">
            <p>12</p>
            <h1>USER PERSONA</h1>
          </div>

          <div>
            <div className="persona">
              <p>{content.userPersona.titleParagraph}</p>

              <div className="image-container">
                <img src={content.userPersona.personaImage} alt="persona" />
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="header">
            <p>13</p>
            <h1>PRODUCT GOALS</h1>
          </div>

          <div>
            <div className="product-goals">
              {content.productGoals.titleParagraph.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <div className="image-container">
                <img
                  src={content.productGoals.goalsImage}
                  alt="product-goals"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="header">
            <p>14</p>
            <h1>PRIORITIZED ROADMAP</h1>
          </div>

          <div>
            <div className="roadmap">
              {content.prioritizedRoadmap.titleParagraph.map(
                (paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                )
              )}

              <div className="roadmap-list">
                <div>
                  <p className="list-title">P1</p>
                  <ul>
                    {content.prioritizedRoadmap.phaseOne.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="list-title">P2</p>
                  <ul>
                    {content.prioritizedRoadmap.phaseTwo.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="list-title">P3</p>
                  <ul>
                    {content.prioritizedRoadmap.phaseThree.map(
                      (step, index) => (
                        <li key={index}>{step}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="header">
            <p>15</p>
            <h1>SITEMAP</h1>
          </div>

          <div>
            <div className="sitemap">
              <div className="image-container">
                <img src={content.siteMap.siteMapImage} alt="site-map" />
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="header">
            <p>16</p>
            <h1>USER AND TASK FLOW</h1>
          </div>

          <div>
            <div className="flows">
              {content.userAndTaskFlow.titleParagraph.map(
                (paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                )
              )}

              <div className="image-container">
                <img
                  src={content.userAndTaskFlow.userFlowImage}
                  alt="user-flow"
                />
              </div>

              <div className="image-container">
                <img
                  src={content.userAndTaskFlow.taskFlowImage}
                  alt="task-flow"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="header">
            <p>17</p>
            <h1>LOW FIDELITY DESIGN</h1>
          </div>

          <div className="low-fi">
            <div className="scroll-indicator">
              <p>scroll</p>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8783 17.931L21.1702 9.83765L13.0769 10.5457"
                  stroke="white"
                  stroke-width="0.8"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8319 22.1626L21.0703 9.96094"
                  stroke="white"
                  stroke-width="0.8"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="wireframes">
              {content.wireframes.map((frame, index) => (
                <img key={index} src={frame} alt="wireframe" />
              ))}
            </div>
          </div>
        </div>

        <div className="section">
          <div className="header">
            <p>18</p>
            <h1>TYPOGRAPHY</h1>
          </div>

          <div>
            <div className="typography">
              <div className="image-container">
                <img src={content.typographyImage} alt="typography" />
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="header">
            <p>19</p>
            <h1>HIGH FIDELITY PROTOTYPE</h1>
          </div>

          <div>
            <div className="prototype">
              <a target="_blank" rel="noreferrer" href={content.figmaLink}>
                <div className="image-container">
                  <img src={content.highFidelityImage} alt="high-fi" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CaseStudy = () => {
  const { slug } = useParams();
  // console.log("slug", slug);
  const content = pageData[slug];
  // console.log("content", content);

  return content ? <Page content={content} /> : <div>Page not found</div>;
};

export default CaseStudy;
