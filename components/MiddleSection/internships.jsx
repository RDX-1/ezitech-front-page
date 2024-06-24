import React from "react";
import "./internship.css";
import { FaUserTie } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

export const Internship = () => {
  return (
    <div className="internships">
      <h1>Perfect Internship's For You</h1>
      <div className="card-container">
        <div className="main-card">
          <div className="card-title">
            <span>
              <a href="#">HTML/CSS JAVASCRIPT</a>
            </span>
            <p>Ezitech Institute</p>
          </div>
          <div className="card-content">
            <FaUserTie /> Employment- <span>Hybrid</span> <br />
            <FaLocationArrow /> Location- <span>Rawalpindi</span> <br />
            <FaShoppingBag /> Job Type- <span>Full Time</span>{" "}
            <span>Part Time</span> <br />
            <button>Read More</button>
          </div>
        </div>
        <div className="main-card">
          <div className="card-title">
            <span>
              <a href="#">GRAPHIC DESIGNING</a>
            </span>
            <p>Ezitech Institute</p>
          </div>
          <div className="card-content">
            <FaUserTie /> Employment- <span>Hybrid</span> <br />
            <FaLocationArrow /> Location- <span>Rawalpindi</span> <br />
            <FaShoppingBag /> Job Type- <span>Full Time</span>
            <span>Part Time</span> <br />
            <button>Read More</button>
          </div>
        </div>
        <div className="main-card">
          <div className="card-title">
            <span>
              <a href="#">DIGITAL MARKETING</a>
            </span>
            <p>Ezitech Institute</p>
          </div>
          <div className="card-content">
            <FaUserTie /> Employment- <span>Hybrid</span> <br />
            <FaLocationArrow /> Location- <span>Rawalpindi</span> <br />
            <FaShoppingBag /> Job Type- <span>Full Time</span>{" "}
            <span>Part Time</span> <br />
            <button>Read More</button>
          </div>
        </div>
        <div className="main-card">
          <div className="card-title">
            <span>
              <a href="#">FLUTTER DEVELOPMENT</a>
            </span>
            <p>Ezitech Institute</p>
          </div>
          <div className="card-content">
            <FaUserTie /> Employment- <span>Hybrid</span> <br />
            <FaLocationArrow /> Location- <span>Rawalpindi</span> <br />
            <FaShoppingBag /> Job Type- <span>Full Time</span>{" "}
            <span>Part Time</span> <br />
            <button>Read More</button>
          </div>
        </div>
        <div className="main-card">
          <div className="card-title">
            <span>
              <a href="#">MACHINE LEARNING</a>
            </span>
            <p>Ezitech Institute</p>
          </div>
          <div className="card-content">
            <FaUserTie /> Employment- <span>Hybrid</span> <br />
            <FaLocationArrow /> Location- <span>Rawalpindi</span> <br />
            <FaShoppingBag /> Job Type- <span>Full Time</span>{" "}
            <span>Part Time</span> <br />
            <button>Read More</button>
          </div>
        </div>
        <div className="main-card">
          <div className="card-title">
            <span>
              <a href="#">MERN DEVELOPMENT</a>
            </span>
            <p>Ezitech Institute</p>
          </div>
          <div className="card-content">
            <FaUserTie /> Employment- <span>Hybrid</span> <br />
            <FaLocationArrow /> Location- <span>Rawalpindi</span> <br />
            <FaShoppingBag /> Job Type- <span>Full Time</span>{" "}
            <span>Part Time</span> <br />
            <button>Read More</button>
          </div>
        </div>
      </div>
      <button className="load-button">Load More</button>
    </div>
  );
};
