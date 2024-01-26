import { ReactComponent as File } from "../assets/icons/file.svg";
import { ReactComponent as Phone } from "../assets/icons/phone.svg";
import { ReactComponent as Envelope } from "../assets/icons/envelope.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin.svg";

export default function Contact() {
  return (
    <div className="contact-content">
      <div className="header-row">
        <h1>CONTACT</h1>
      </div>

      <div className="contact-container">
        <div className="left-column">
          <p>
            Fill out the contact form, or contact me via one of the provided
            methods.
          </p>

          <ul>
            <li>
              <File /> Download Resume
            </li>
            <li>
              <Envelope /> livmarolf@gmail.com
            </li>
            <li>
              <Phone /> (801) 885-8122
            </li>
            <li>
              <Linkedin /> /in/oliviamarolf
            </li>
          </ul>
        </div>

        <div className="right-column">
          <form>
            <div className="top-inputs">
              <div className="input">
                <label for="name">Name</label>
                <input type="text" placeholder="Jon Doe" />
              </div>

              <div className="input">
                <label for="name">Email</label>
                <input type="text" placeholder="example@yourdomain.com" />
              </div>
            </div>

            <div className="input">
              <label for="message">Message</label>
              <input type="text" placeholder="Hi there..." />
            </div>

            <div className="btn-container">
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
