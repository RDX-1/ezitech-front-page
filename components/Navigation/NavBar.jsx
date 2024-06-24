import React from "react";
import "./navbar.css";
import { useState, useEffect } from "react";
import logo from "../img/EZITECH-LOGO-white.png";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import logo2 from "../img/EZIBLOGS-DG.png";
import logo3 from "../img/white-ezipos.png";
import logo4 from "../img/white-lgooo-01.png";
import { SkillChanger } from "../typeWriter";

export const NavBar = () => {
  return (
    <section className="first-container">
      <navbar className="navigation">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="EZITECH" />
          </a>
        </div>
        <div className="list-nav">
          <ul className="ul-nav">
            <li>
              <a href="#">HOME </a>
            </li>
            <li>
              <a href="#">ABOUT US </a>
            </li>
            <li class="dropdown-parent">
              <a href="#" class="cert-dropdown">
                CERTIFICATIONS
              </a>
              <ul class="dropdown">
                <li>Free Courses</li>
                <li>OnSite Courses</li>
              </ul>
            </li>
            <li>
              <a href="#">INTERNSHIPS </a>
            </li>
            <li>
              <a href="#">SEMINARS </a>
            </li>
            <li>
              <a href="#">INTERN PORTAL </a>
            </li>
          </ul>
        </div>
        <div className="right-most">
          <a href="#">
            <FaRegHeart />
          </a>
          <a href="#">
            <IoSearchSharp />
          </a>
        </div>
      </navbar>

      <div className="main-container">
        <div className="heading1">
          <h1>
            Learn the Fundamentals with our Our Experts in <SkillChanger />
          </h1>
        </div>
        <h2>Utilize Effective Training to Reach Your Potential</h2>
        <input
          type="search"
          placeholder="Search Courses..."
          className="searchbox"
        />
        <h2>
          Explore more useful products <FaHeart />
        </h2>
        <div className="img-container">
          <a href="#">
            <img src={logo2} alt="" />
          </a>
          <a href="#">
            <img src={logo3} alt="" />
          </a>
          <a href="#" className="img3">
            <img src={logo4} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};
