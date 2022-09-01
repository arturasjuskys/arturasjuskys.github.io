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
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input name="user_name" type="text" placeholder="Name" />
          <input name="user_subject" type="text" placeholder="Subject" />
          <input name="user_email" type="text" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {submitted && <span>Thanks, I'll replay ASAP</span>}
        </form>
      </div>
    </div>
  );
}
