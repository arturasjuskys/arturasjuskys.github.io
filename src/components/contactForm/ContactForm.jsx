import React, { useRef, useState } from "react";
import "./contactForm.scss";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef();
  const [submited, setSubmited] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

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
          setSubmited(true);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
      <input name="user_name" type="text" placeholder="Name" />
      <input name="user_subject" type="text" placeholder="Subject" />
      <input name="user_email" type="email" placeholder="Email" />
      <textarea name="message" placeholder="Message"></textarea>
      <button type="submit">Send</button>
      {submited && (
        <span className="submited">Thank you , I will respond shortly!</span>
      )}
    </form>
  );
}
