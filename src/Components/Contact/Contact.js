import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import contactImg from "../../img/contact.jpg";
function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rn8juwi",
        "template_5fb0p6o",
        e.target,
        "user_5ySjOOUu9Vj2df9Ohyyw7"
      )
      .then((res) => {
        console.log(res);
        if (res) {
          alert("Thanks For your Message");
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Hire Me.</h1>
              <p className="hire__text white">
                I am a junior full stack developer I can contact me by phone or
                email available for freelance & remote jobs.
              </p>
              <p className="hire__text white">
                <strong>01969846914</strong> or email{" "}
                <strong>nxshipon@gmail.com</strong>
              </p>
            </div>
            <div className="input__box">
              <form onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  className="contact name"
                  placeholder="Your name *"
                />
                <input
                  type="text"
                  className="contact email"
                  name="user_email"
                  placeholder="Your Email *"
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write Your message"
                ></textarea>
                <button className="btn contact pointer" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col__2">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
