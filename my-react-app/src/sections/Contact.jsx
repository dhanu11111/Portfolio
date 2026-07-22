import React from "react";
import "./Contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
  FaPaperPlane,
  FaUser,
  FaTag,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      {/* Background Effects */}
      <div className="bg-grid"></div>

      <div className="purple-glow"></div>
      <div className="cyan-glow"></div>

      <div className="stars"></div>
      {/* Heading */}
      <div className="contact-heading">
        <span className="contact-tag">GET IN TOUCH</span>

        <h2>
          Let's Build Something <span>Amazing</span>
        </h2>

        <p>
          Have a project in mind or want to discuss opportunities?
          <br />
          Feel free to reach out. I'd love to hear from you!
        </p>
      </div>

      {/* Main Grid */}
      <div className="contact-content">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <div className="info-card">
            <div className="icon-circle">
              <FaEnvelope />
            </div>

            <div className="info-text">
              <h4>Email</h4>
              <p>dhanushinde11111@gmail.com</p>
            </div>

            <span className="arrow">→</span>
          </div>

          <div className="info-card">
            <div className="icon-circle">
              <FaPhoneAlt />
            </div>

            <div className="info-text">
              <h4>Phone</h4>
              <p>+91 7021533919</p>
            </div>

            <span className="arrow">→</span>
          </div>

          <div className="info-card">
            <div className="icon-circle">
              <FaMapMarkerAlt />
            </div>

            <div className="info-text">
              <h4>Location</h4>
              <p>Maharashtra, India</p>
            </div>

            <span className="arrow">→</span>
          </div>

          <div className="info-card">
            <div className="icon-circle">
              <FaLinkedinIn />
            </div>

            <div className="info-text">
              <h4>LinkedIn</h4>
              <p>linkedin.com/in/dhanashree-shinde-601265408</p>
            </div>

            <span className="arrow">→</span>
          </div>

          <div className="info-card">
            <div className="icon-circle">
              <FaGithub />
            </div>

            <div className="info-text">
              <h4>GitHub</h4>
              <p><a href="https://github.com/dhanu11111"></a></p>
            </div>

            <span className="arrow">→</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <form
            className="#contact"
            action="https://formspree.io/f/xbdnywnw"
            method="POST"
          >
            <div className="row">
              <div className="input-box">
                <FaUser />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="input-box">
                <FaEnvelope />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>

            <div className="input-box full">
              <FaTag />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>

            <div className="textarea-box">
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button type="submit" className="send-btn">
              <FaPaperPlane />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>

      {/* Footer
        <footer className="contact-footer">
          <h2>
            Dhanashree <span>Shinde</span>
          </h2>

          <p>Full Stack Java Developer | React Developer</p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaEnvelope />
            </a>
          </div>

          <p className="copyright">
            © 2026 Dhanashree Shinde. All Rights Reserved.
          </p>
        </footer> */}

    </section>
  );
};

export default Contact;