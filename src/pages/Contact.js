import emailjs from "@emailjs/browser";
import TextareaAutosize from "react-textarea-autosize";
import { useRef, useState } from "react";
import validateEmail from "../utils/validateEmail";
import { ReactComponent as Arrow } from "../assets/arrow.svg";

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
    <div className="contact-container">
      <div className="contact-content">
        <div className="header">
          <h1>LET'S WORK TOGETHER</h1>
        </div>

        <form ref={form} onSubmit={handleSubmit}>
          <div className="row">
            <div className="input">
              <label>Name</label>
              <input
                maxLength="30"
                type="text"
                placeholder="> John Doe"
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
                placeholder="> example@gmail.com"
                name="user_email"
                onChange={(e) => handleChange(e)}
              />

              {invalidEmail && <p className="err-msg">&gt; Invalid Email</p>}
            </div>
          </div>

          <div className="input">
            <label>Message</label>
            <TextareaAutosize
              required
              placeholder="> Hello there..."
              name="message"
              maxLength="400"
              onChange={(e) => setMessage(e.target.value)}
            />

            <p className="message-len">{message.length}/400</p>
          </div>

          <div className="btn-container">
            <button disabled={invalidEmail || !name || !email || !message}>
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>

      <div className="contact-links">
        <div className="columns">
          <div className="left">
            <a
              href="https://www.linkedin.com/in/oliviamarolf/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <p>LINKEDIN</p>
                <p className="handle">/IN/OLIVIAMAROLF</p>
                <Arrow />
              </div>
            </a>

            <a
              href="https://github.com/livmarolf"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <p>GITHUB</p>
                <p className="handle">/LIVMAROLF</p>
                <Arrow />
              </div>
            </a>

            <a
              href="mailto:livmarolf@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <p>EMAIL</p>
                <p className="handle">LIVMAROLF@GMAIL.COM</p>
                <Arrow />
              </div>
            </a>
          </div>

          <div className="right">
            <a
              href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:d43b8060-d87c-42d6-b97d-6e0b8a6d30bf"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <p>RESUME</p>
                <p className="handle">VIEW/DOWNLOAD</p>
                <Arrow />
              </div>
            </a>

            <a href="tel:+8018858122" target="_blank" rel="noreferrer">
              <div>
                <p>MOBILE</p>
                <p className="handle">(801) 885-8122</p>
                <Arrow />
              </div>
            </a>

            <a
              href="https://www.figma.com/@livmarolf"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <p>FIGMA</p>
                <p className="handle">@LIVMAROLF</p>
                <Arrow />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
