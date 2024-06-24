import React from "react";
import "./ITservices.css";
import image from "../img/President-of-pakistan-259x299.png";
import signup from "../img/signup.png";
import course from "../img/course.png";
import learning from "../img/learning.png";
import ml from "../img/technology/artificial-intelligence-3-69x69.png";
import blockchain from "../img/technology/blockchain-69x69.png";
import amazon from "../img/technology/amazon-69x69.png";
import cyber from "../img/technology/cybersecurity-69x69.png";
import develop from "../img/technology/development-69x69.png";
import design from "../img/technology/designing-69x69.png";
import gaming from "../img/technology/gaming-69x69.png";
import ios from "../img/technology/IOS and-69x69.png";
import desgin3d from "../img/technology/3d-68x68.png";
import architect from "../img/technology/architect-69x69.png";
import animation from "../img/technology/animation-68x68.png";
import social from "../img/technology/social-media-1-63x63.png";

export const ITservices = () => {
  return (
    <div className="mid-section">
      <div className="services-container">
        <h1>Best IT Services Award 2023</h1>
        <div className="boxs">
          <div className="img-box">
            <img src={image} alt="" />
          </div>
          <div className="content-box">
            <strong>
              Ezitech Is affiliated With <a href="#">Eziline Software House</a>
            </strong>
            . Eziline has been awarded the prestigious Best Software House in IT
            sector award by the President of Pakistan. This is an incredible
            achievement and a testament to the hard work and dedication of the
            entire team at Eziline Software House. The award is a great
            recognition of the company’s achievements in the field of IT and
            serves as a major milestone in its journey towards success. This
            award is a huge source of motivation and inspiration for the entire
            team at Eziline Software House. <br /> <br />
            <strong>
              It is a validation of the company’s commitment to innovation,
              excellence, and customer satisfaction
            </strong>
            . The award acknowledges the hard work and dedication of every
            member of the team who has contributed to the success of the
            company. <br /> <br />
            <strong>
              Ismail Shah, the CEO of Eziline Software House Pvt Ltd
            </strong>
            , received the Best Services Award in the IT sector from the{" "}
            <strong>President of Pakistan, Dr. Arif Alvi</strong>, in
            recognition of his remarkable contributions to the country’s
            technology industry. <br /> <br />
            <button>Eziline Profile</button>
          </div>
        </div>
      </div>

      <div className="works">
        <h1>How it Works?</h1>
        <div className="middle-3">
          <div className="signup">
            <img src={signup} alt="" />
            Sign up <br />
            <span>
              Enter your name, email, and contact details to get started. It
              truly is that simple!
            </span>
          </div>
          <div className="course">
            <img src={course} alt="" />
            Select course <br />
            <span>
              Browse our extensive and ever-expanding variety of courses for
              professional development.
            </span>
          </div>
          <div className="learning">
            <img src={learning} alt="" />
            Start Learning <br />
            <span>
              Do the tasks, and your teacher will evaluate them before providing
              you with thorough.
            </span>
          </div>
        </div>
      </div>

      <div className="technology">
        <h1>What new trends and technology will you discover?</h1>
        <p>
          Today's technology is developing quickly, and our new technological
          trends are enabling and advancing, speeding up the pace of
          development.
        </p>

        <div className="image-cards">
          <div class="card">
            <img src={ml} alt="" />
            <div class="card-content">
              <h3>ML & AI</h3>
            </div>
          </div>
          <div class="card">
            <img src={blockchain} alt="" />
            <div class="card-content">
              <h3>Block Chain</h3>
            </div>
          </div>
          <div class="card">
            <img src={amazon} alt="" />
            <div class="card-content">
              <h3>Amazon</h3>
            </div>
          </div>
          <div class="card">
            <img src={cyber} alt="" />
            <div class="card-content">
              <h3>Cyber Security</h3>
            </div>
          </div>
          <div class="card">
            <img src={develop} alt="" />
            <div class="card-content">
              <h3>Development</h3>
            </div>
          </div>
          <div class="card">
            <img src={design} alt="" />
            <div class="card-content">
              <h3>Designing</h3>
            </div>
          </div>
          <div class="card">
            <img src={gaming} alt="" />
            <div class="card-content">
              <h3>Gaming</h3>
            </div>
          </div>
          <div class="card">
            <img src={ios} alt="" />
            <div class="card-content">
              <h3>IOS & AND</h3>
            </div>
          </div>
          <div class="card">
            <img src={architect} alt="" />
            <div class="card-content">
              <h3>Architecture</h3>
            </div>
          </div>
          <div class="card">
            <img src={social} alt="" />
            <div class="card-content">
              <h3>Marketing</h3>
            </div>
          </div>
          <div class="card">
            <img src={desgin3d} alt="" />
            <div class="card-content">
              <h3>3D</h3>
            </div>
          </div>
          <div class="card">
            <img src={animation} alt="" />
            <div class="card-content">
              <h3>Animation</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
