import { pageData } from "../data/CaseStudies";
import { useParams } from "react-router-dom";

const Page = ({ content }) => {
  console.log(content);

  return (
    <div className="page-container">
      <div>{content.title}</div>
    </div>
  );
};

const CaseStudy = () => {
  const { slug } = useParams();
  console.log("slug", slug);
  const content = pageData[slug];
  console.log("content", content);

  return content ? <Page content={content} /> : <div>Page not found</div>;
};

export default CaseStudy;
