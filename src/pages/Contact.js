import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ReactComponent as File } from "../assets/icons/file.svg";
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
      <div className="header-row">
        <div className="title-container">
          <div className="title">
            <h1>CONTACT</h1>
          </div>
        </div>
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
                <input
                  maxLength="50"
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
              <input
                required
                type="text"
                placeholder="Hi there..."
                name="message"
                maxLength="400"
                onChange={(e) => setMessage(e.target.value)}
              />
              <p className="message-len">{message.length}/400</p>
            </div>

            <div className="btn-container">
              <button disabled={invalidEmail || !name || !email || !message}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
