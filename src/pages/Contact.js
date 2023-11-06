import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="title">
          <h1>
            <span>Contact</span> &mdash; fill out the form below, or contact me
            via one of the provided methods.
          </h1>
        </div>

        <div className="contact-mathods">
          <div>
            <FontAwesomeIcon icon={faMobile} />
            <p>(801) 885-8122</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faEnvelope} /> <p>livmarolf@gmail.com</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faLinkedin} /> <p>/in/oliviamarolf</p>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-top">
              <div>
                <label>Name</label>
                <input placeholder="John Doe" />
              </div>

              <div>
                <label>Email</label>
                <input placeholder="example@yourdomain.com" />
              </div>
            </div>

            <div className="form-bottom">
              <label>Message</label>
              <input placeholder="Hi there..." />
            </div>

            <div>
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
