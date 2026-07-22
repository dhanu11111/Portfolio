import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaEnvelope,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";
import { MdWork } from "react-icons/md";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-stars"></div>

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-about">

          <h2>
            Dhanashree <span>Shinde</span>
          </h2>

          <h4>Full Stack Developer</h4>

          <p>
            Passionate Full Stack Developer focused on building
            responsive, scalable and user-friendly web applications
            while continuously learning modern technologies.
          </p>

          <a href="#contact" className="contact-card">

            <div className="icon-box">
              <FaEnvelope />
            </div>

            <div>
              <h5>Get In Touch</h5>
              <span>dhanushinde11111@gmail.com</span>
            </div>

          </a>

        </div>

        {/* CENTER */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>

        </div>

        {/* RIGHT */}

        <div className="footer-services">

          <h3>Expertise</h3>

          <ul>
            <li>Frontend Development</li>
            <li>React.js</li>
            <li>JavaScript</li>
            <li>Backend Development</li>
            <li>Java</li>
            <li>MySQL</li>
            <li>REST API</li>
          </ul>

        </div>

      </div>

      <div className="divider"></div>

      <div className="social-row">

        <a href="https://github.com/dhanu11111">
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a href="https://www.linkedin.com/in/dhanashree-shinde-601265408/">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a href="https://leetcode.com/u/dhanushinde11111/">
          <SiLeetcode />
          <span>LeetCode</span>
        </a>

        <a href="https://wingz.itvedant.com/portfolio/dhanashree-shinde-feb26-t229">
          <MdWork />
          <span>Wings Portfolio</span>
        </a>

      </div>

      <div className="divider"></div>

      <div className="footer-bottom">

        <p>
          © 2026 Dhanashree Shinde. All Rights Reserved.
        </p>

        <button
          onClick={scrollTop}
          className="top-btn"
        >
          <FaArrowUp />
          Back to Top
        </button>

      </div>

    </footer>
  );
}


