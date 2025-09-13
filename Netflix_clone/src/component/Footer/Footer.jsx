import React from "react";
import "./Fotter.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="footer-questions">
          Questions? <a href="#">Contact us.</a>
        </p>
      </div>

      <div className="footer-links">
        <ul>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Speed Test</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Cookie Preferences</a>
          </li>
          <li>
            <a href="#">Legal Notices</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Ways to Watch</a>
          </li>
          <li>
            <a href="#">Corporate Information</a>
          </li>
          <li>
            <a href="#">Only on Netflix</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#">Media Center</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="footer-lang">
        <select>
          <option value="en">English</option>
          <option value="am">Amharic</option>
        </select>
      </div>

      <div className="footer-country">
        <p>Netflix Ethiopia</p>
      </div>
    </footer>
  );
};

export default Footer;
