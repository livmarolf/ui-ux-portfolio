export default function Contact() {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="header-row">
          <h1>CONTACT</h1>
        </div>

        <div>
          <div>
            <p>
              Fill out the contact form, or contact me via one of the provided
              methods.
            </p>

            <ul>
              <li>Download Resume</li>
              <li>livmarolf@gmail.com</li>
              <li>(801) 885-8122</li>
              <li>/in/oliviamarolf</li>
            </ul>
          </div>

          <div>
            <form>
              <label for="name">Name</label>
              <input type="text" id="name" value="name" />

              <label for="name">Email</label>
              <input type="text" id="email" value="email" />

              <label for="message">Message</label>
              <input type="text" id="message" value="message" />

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
