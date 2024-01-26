import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ReactComponent as File } from "../assets/icons/file.svg";
import { ReactComponent as Phone } from "../assets/icons/phone.svg";
import { ReactComponent as Envelope } from "../assets/icons/envelope.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin.svg";

export default function Contact() {
  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "personal_contact",
        "contact_form",
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          window.location.reload();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

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
          <form ref={form} onSubmit={handleSubmit}>
            <div className="top-inputs">
              <div className="input">
                <label>Name</label>
                <input type="text" placeholder="Jon Doe" name="user_name" />
              </div>

              <div className="input">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="example@yourdomain.com"
                  name="user_email"
                />
              </div>
            </div>

            <div className="input">
              <label>Message</label>
              <input type="text" placeholder="Hi there..." name="message" />
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
