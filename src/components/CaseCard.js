import { Link } from "react-router-dom";

export default function CaseCard({ title, description, imgPath, slug }) {
  return (
    <div className="case-card">
      <Link to={`/${slug}`}>
        <div className="image-container">
          <img src={process.env.PUBLIC_URL + imgPath} alt="cover" />
        </div>
      </Link>

      <div className="description">
        <div className="title-link">
          <Link to={`/${slug}`}>
            <h1>{title}</h1>
          </Link>
        </div>

        <p>{description}</p>
      </div>
    </div>
  );
}
