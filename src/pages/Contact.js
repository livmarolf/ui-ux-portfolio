import emailjs from "@emailjs/browser";
import TextareaAutosize from "react-textarea-autosize";
import { useRef, useState } from "react";
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
    <div className="contact-container">
      <div className="contact-content">
        <div className="header">
          <div className="title">
            <h1>CONTACT</h1>

            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10.5"
                cy="10.5"
                r="9.5"
                stroke="#7E7E7E"
                strokeWidth="2"
              />
              <path
                d="M12.34 4V17.2H10.12V6.52L7.02 8.52L6 6.86L10.3 4H12.34Z"
                fill="#7E7E7E"
              />
            </svg>
          </div>
        </div>

        <form ref={form} onSubmit={handleSubmit}>
          <div className="input">
            <label>[ Name ]</label>
            <input
              maxLength="30"
              type="text"
              placeholder="john doe"
              name="user_name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input">
            <label>[ Email ]</label>
            <input
              maxLength="30"
              required
              type="text"
              placeholder="example@gmail.com"
              name="user_email"
              onChange={(e) => handleChange(e)}
            />

            {invalidEmail && <p className="err-msg">&gt; Invalid Email</p>}
          </div>

          <div className="input">
            <label>[ Message ]</label>
            <TextareaAutosize
              required
              placeholder="hello there..."
              name="message"
              maxLength="400"
              onChange={(e) => setMessage(e.target.value)}
            />

            <p className="message-len">{message.length}/400</p>
          </div>

          <div className="btn-container">
            <button disabled={invalidEmail || !name || !email || !message}>
              [ SEND
              <svg
                width="53"
                height="56"
                viewBox="0 0 53 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.6376 35.31L40.1605 41.2872L52.1149 40.2413L51.5919 34.2642L39.6376 35.31ZM43.1354 6.44739L49.1125 5.92445C48.8237 2.62335 45.9135 0.181411 42.6124 0.470219L43.1354 6.44739ZM14.2727 2.94962L8.29557 3.47255L9.34144 15.4269L15.3186 14.904L14.2727 2.94962ZM2.3256 45.7476C0.195596 48.286 0.526704 52.0706 3.06515 54.2006C5.6036 56.3306 9.38814 55.9995 11.5181 53.461L2.3256 45.7476ZM47.3689 10.7356C49.499 8.19716 49.1678 4.41263 46.6294 2.28262C44.0909 0.152608 40.3064 0.483716 38.1764 3.02217L47.3689 10.7356ZM51.5919 34.2642L49.1125 5.92445L37.1582 6.97032L39.6376 35.31L51.5919 34.2642ZM42.6124 0.470219L14.2727 2.94962L15.3186 14.904L43.6583 12.4246L42.6124 0.470219ZM11.5181 53.461L47.3689 10.7356L38.1764 3.02217L2.3256 45.7476L11.5181 53.461Z"
                  fill="white"
                />
              </svg>
              ]
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
