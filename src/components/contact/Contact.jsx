import { useRef } from "react";
import { useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // to display message
    setSubmitted(true);

    // send email
    emailjs
      .sendForm(
        "service_prvmxdw",
        "template_972rs5g",
        formRef.current,
        "vyVWZUbG7QBirNF3c"
      )
      .then(
        result => {
          console.log(result.text);
          setSubmitted(true);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact">
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Me</h2>
        <div className="input-wrapper">
          <div className="form-item">
            <input type="text" name="user_name" autoComplete="off" required />
            <label htmlFor="name" className="label-name">
              <span className="content-name">Name</span>
            </label>
          </div>
        </div>
        <div className="input-wrapper">
          <div className="form-item">
            <input name="user_subject" type="text" required />
            <label htmlFor="subject" className="label-name">
              <span className="content-name">Subject</span>
            </label>
          </div>
        </div>
        <div className="input-wrapper">
          <div className="form-item">
            <input name="user_email" type="email" required />
            <label htmlFor="subject" className="label-name">
              <span className="content-name">Email</span>
            </label>
          </div>
        </div>
        {/* <div className="input-wrapper">
          <div className="form-item">
            <input name="message" type="text" required />
            <label htmlFor="subject" className="label-name">
              <span className="content-name">Message</span>
            </label>
          </div>
        </div> */}
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit" className="contact-button">
          Send
        </button>
        {submitted && <span>Thanks, I'll replay ASAP</span>}
      </form>
    </div>
  );
}
