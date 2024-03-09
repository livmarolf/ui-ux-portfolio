import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ReactComponent as File } from "../assets/icons/document-text.svg";
import { ReactComponent as Phone } from "../assets/icons/phone.svg";
import { ReactComponent as Envelope } from "../assets/icons/envelope.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin.svg";
import validateEmail from "../utils/validateEmail";

export default function Contact() {
  const form = useRef();
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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

  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue === "") {
      setInvalidEmail(false);
      setEmail("");
    } else {
      setInvalidEmail(!validateEmail(inputValue));
      setEmail(inputValue);
    }
  };

  return (
    <div className="contact-content">
      <div className="left-column">
        <div className="title">
          <h1>CONTACT</h1>
        </div>

        <p className="sub-text">
          Fill out the contact form, or contact me via one of the provided
          methods.
        </p>

        <div className="contact-methods">
          <div className="contact-method">
            <div className="circle">
              <File />
            </div>

            <div className="method-txt">
              <a
                target="blank"
                href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:3ce121b0-1d8e-4383-918e-1d541df28522"
              >
                download resume
              </a>
            </div>
          </div>

          <div className="contact-method">
            <div className="circle">
              <Envelope />
            </div>

            <div className="method-txt">
              <a href="mailto:livmarolf@gmail.com">livmarolf@gmail.com</a>
            </div>
          </div>

          <div className="contact-method">
            <div className="circle">
              <Phone />
            </div>

            <div className="method-txt">
              <a href="tel:+18018858122">(801) 885-8122</a>
            </div>
          </div>

          <div className="contact-method">
            <div className="circle">
              <Linkedin />
            </div>

            <div className="method-txt">
              <a
                target="blank_"
                href="https://www.linkedin.com/in/oliviamarolf/"
              >
                /in/oliviamarolf
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="right-column">
        <div className="dark-title">
          <h1>let's talk</h1>
        </div>

        <form ref={form} onSubmit={handleSubmit}>
          <div className="top-inputs">
            <div className="input">
              <label>Name</label>
              <input
                maxLength="30"
                type="text"
                placeholder="John Doe"
                name="user_name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input">
              <label>Email</label>
              <input
                maxLength="30"
                required
                type="text"
                placeholder="example@yourdomain.com"
                name="user_email"
                onChange={(e) => handleChange(e)}
              />
              {invalidEmail && <p className="err-msg">Invalid Email</p>}
            </div>
          </div>

          <div className="input">
            <label>Message</label>
            <textarea
              required
              placeholder="Hi there..."
              name="message"
              maxLength="400"
              onChange={(e) => setMessage(e.target.value)}
            />
            <p className="message-len">{message.length}/400</p>
          </div>

          <div className="btn-container">
            <button disabled={invalidEmail || !name || !email || !message}>
              send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
