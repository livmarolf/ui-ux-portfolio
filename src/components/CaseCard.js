import { Link } from "react-router-dom";

export default function CaseCard({ title, description, imgPath, slug, count }) {
  return (
    <div className="case-card">
      <div className="description">
        <p>{description}</p>
        <p className="count">{count}</p>
      </div>

      <Link to={`/${slug}`}>
        <div className="image-container">
          <img src={process.env.PUBLIC_URL + imgPath} alt="cover" />
        </div>
      </Link>

      <div className="title">
        <Link to={`/${slug}`}>
          <h1>{title}</h1>
        </Link>

        <Link to={`/${slug}`}>
          <div className="view-btn">
            <p>VIEW</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
