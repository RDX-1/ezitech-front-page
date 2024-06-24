import React from "react";
import tablet from "../img/tablet1438x554.webp";
import "./footer.css";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import illustrator from "../img/illustratorcafe-75x75.webp";
import arbitrage from "../img/arbitrage.webp";

export const Footer = () => {
  return (
    <footer>
      <div className="back">
        <h1 className="foot-heading-1">
          It's time to <span>start</span> investing in yourself
        </h1>
        <div className="tablet">
          <img src={tablet} alt="" />
        </div>
      </div>

      <section className="footer-section">
        <div className="list-section">
          <div className="ul-1">
            <li className="list">ABOUT</li>
            <li className="list">POPULAR COURSES</li>
            <li className="list">PAGES</li>
            <li className="list">CONTACT</li>
          </div>
          <div className="ul-2">
            <li className="list">
              Ezitech Institute provides a platform for newcomers to launch
              their IT and freelancing careers. Our emphasis on practical
              information technology courses that are career and work oriented
              makes us the top computer institute in Rawalpindi, Islamabad,
              Pakistan.
            </li>
            <li className="list list-courses">
              <ul>
                <li>
                  <img src={arbitrage} alt="" />
                  <span><a href="#"> Online Arbitrage Mastermind 2.0</a></span>
                </li>
                <li>
                  <img src={illustrator} alt="" />
                  <span><a href="#">Adobe Illustrator with Projects</a></span>
                </li>
              </ul>
            </li>
            <li className="list list-pages">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">SHOP</a>
              </li>
              <li>
                <a href="#">INTERNSHIP</a>
              </li>
              <li>
                <a href="#">CODELAB</a>
              </li>
            </li>
            <li className="list list-contact">
              <li>
                <FaLocationDot />
                <span>
                  Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi,
                  Punjab 46000
                </span>
              </li>
              <li>
                <FaPhone /> +923455555396
              </li>
              <li>
                <a href="#">
                  <IoMail /> info@ezitech.org
                </a>
              </li>
            </li>
          </div>
        </div>
      </section>

      <div className="copyright">
        Copyright © 2024 Ezitech Institute | Design & Develop by{" "}
        <a href="#">
          <span></span>Eziline Software House
        </a>
      </div>
    </footer>
  );
};
