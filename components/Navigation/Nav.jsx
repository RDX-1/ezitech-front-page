import React from "react";
import "./Nav.css";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot, FaBehance, FaYoutube } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaUser } from "react-icons/fa";

export const Nav = () => {
  return (
    <navbar className="head">
      <div className="division">
        <IoIosCall /> +92 3455555396
      </div>
      <div className="division">
        <FaLocationDot /> Office #304-B Amna Plaza, Rawalpindi, Pakistan
      </div>
      <div className="division">
        <GoClockFill />
        Mon - Fri 8.00 - 20.00
      </div>
      <div className="division">
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaBehance />
        </a>
        <a href="#">
          <FaLinkedinIn />
        </a>
        <a href="#">
          <FaYoutube />
        </a>
      </div>
      <div className="division last">
        <FaUser />
        <a href="#">Login</a> | <a href="#">Register</a>
      </div>
    </navbar>
  );
};
