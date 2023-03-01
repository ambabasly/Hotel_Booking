import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

const myName = "Round d clock Suite.";
const currentDate = new Date();

export const Footer = () => {
  return (
    <footer>
      <div id="footer">
        <div data-aos="fade-up">
          <h3>Round d Clock Suite </h3>
          <p>
            <strong>Round d clock Suite</strong> ist die Heimat einer
            erstaunlichen Erfahrung! Wir sind stolz darauf, mit über einer
            Million positiver Bewertungen sowohl offline als auch online von
            unseren Kunden die Besten zu sein.
          </p>
          <p>
            Der beste Ort, an dem man sein kann, um eine tolle Zeit in{" "}
            <strong>Diusburg </strong>
            zu haben!
          </p>
        </div>
        <div data-aos="fade-up">
          <h3>Connect with us:</h3>
          <div className="socials">
            <h4>
              <MdMarkEmailRead />
            </h4>
            <h4>
              <FaTwitter />
            </h4>
            <h4>
              <FaLinkedinIn />
            </h4>
            <h4>
              <FaYoutube />
            </h4>
            <h4>
              <FaInstagram />
            </h4>
          </div>
        </div>
        <div data-aos="fade-up">
          <h3>Company:</h3>
          <ul>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Terms of Use</Link>
            </li>
            <li>
              <Link>API</Link>
            </li>
          </ul>
        </div>
        <div data-aos="fade-up">
          <h3>Quick Links:</h3>
          <ul>
            <li>
              <Link>Resources</Link>
            </li>
            <li>
              <Link>Pricing</Link>
            </li>
            <li>
              <Link>Explore</Link>
            </li>
            <li>
              <Link>Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p>
          <i className="fa fa-copyright" aria-hidden="true"></i> {myName}{" "}
          {currentDate.getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};
