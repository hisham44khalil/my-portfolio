import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fnud1oj",
        "template_dj0bb34",
        form.current,
        "3-MTmbECI8wall-kJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      {/* <label>Name</label> */}
      <input type="text" name="user_name" className="user_name" placeholder="User Name"/>
      {/* <label>Phone</label> */}
      <input type="text" name="user_phone" className="user_phone" placeholder="Your Phone"/>
      {/* <label>Email</label> */}
      <input type="email" name="user_email" className="user_email" placeholder="User Email"/>
      {/* <label>Message</label> */}
      <textarea name="message" cols="" rows="5" class="message" placeholder="Your Message" />
      <input type="submit" value="Send" className="send"/>
    </form>
  );
};
