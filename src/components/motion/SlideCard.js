import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SlideCard({ title, description, direction, imgPath }) {
  const slug = title.toLowerCase();
  console.log(slug);

  return (
    <motion.div
      className="case-card"
      initial={{
        opacity: 0,
        x: direction,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      <div className="left">
        <div className="image-container">
          <img
            src={process.env.PUBLIC_URL + imgPath}
            alt="cover"
            // loading="lazy"
          />
        </div>
        <div className="description">
          <div className="title-link">
            <h1>{title}</h1>
            <Link to={`/${slug}`}>
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6576 17.1017L19.4023 11.357L13.6576 5.6123"
                  stroke="#767676"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.3141 11.3569L19.2422 11.3569"
                  stroke="#767676"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
          <p>{description}</p>
        </div>
      </div>
      <div></div>
    </motion.div>
  );
}
