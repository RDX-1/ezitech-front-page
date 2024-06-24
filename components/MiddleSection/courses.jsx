import React from "react";
import "./courses.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import amazon from "../img/courses/amazon_-300x225.webp";
import development from "../img/courses/FrontEnd-870x440-1-300x300-1-300x225.webp";
import fba from "../img/courses/Amazon-Retail-Arbitrage-Picture-1-1-300x225.webp";
import artificial from "../img/courses/ai.webp";
import fiver from "../img/courses/fiverr-300x225.webp";
import flutter from "../img/courses/Flutter-Development-300x225.jpg";
import googleads from "../img/courses/google-ads.jpg";
import metaads from "../img/courses/Instagram-vs-Facebook-Which-is-Better-for-Video-Marketing-300x225.png";
import javascript from "../img/courses/javascript-300x225.webp";
import linkedin from "../img/courses/linkedin-search-300x225.webp";
import ml from "../img/courses/machine-learning-course-1-300x225.webp";
import { FaRegClock } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

export const Courses = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="courses">
      <h1>Recommended Courses</h1>
      <div className="course-cards">
        <Carousel
          responsive={responsive}
          infinite={true}
          className="skill-slider"
          customTransition="all .5s ease"
        >
          <div className="item">
            <div className="item-content">
              <img src={development} alt="" />
              <div className="content">
                <h5>
                  <a href="#">Development</a>
                </h5>
                <h3>
                  <a href="#">Front-End Course with projects</a>
                </h3>
                <span className="time">
                  <FaRegClock /> 3 Months
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <IoEyeOutline /> 8214
                </span>
                <br />
                <div className="rating-price">
                  <span className="rating">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />0.0
                    &nbsp;
                  </span>
                  <span className="main-price">
                    <span className="price">PKR38,000</span>PKR34,000
                  </span>
                </div>
                <button>Preview this Course</button>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-content">
              <img src={artificial} alt="" />
              <div className="content">
                <h5>
                  <a href="#">Development</a>
                </h5>
                <h3>
                  <a href="#">Front-End Course with projects</a>
                </h3>
                <span className="time">
                  <FaRegClock /> 3 Months
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <IoEyeOutline /> 8214
                </span>
                <br />
                <div className="rating-price">
                  <span className="rating">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />0.0
                    &nbsp;
                  </span>
                  <span className="main-price">
                    <span className="price">PKR38,000</span>PKR34,000
                  </span>
                </div>
                <button>Preview this Course</button>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-content">
              <img src={ml} alt="" />
              <div className="content">
                <h5>
                  <a href="#">Development</a>
                </h5>
                <h3>
                  <a href="#">Front-End Course with projects</a>
                </h3>
                <span className="time">
                  <FaRegClock /> 3 Months
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <IoEyeOutline /> 8214
                </span>
                <br />
                <div className="rating-price">
                  <span className="rating">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />0.0
                    &nbsp;
                  </span>
                  <span className="main-price">
                    <span className="price">PKR38,000</span>PKR34,000
                  </span>
                </div>
                <button>Preview this Course</button>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-content">
              <img src={flutter} alt="" />
              <div className="content">
                <h5>
                  <a href="#">Development</a>
                </h5>
                <h3>
                  <a href="#">Front-End Course with projects</a>
                </h3>
                <span className="time">
                  <FaRegClock /> 3 Months
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <IoEyeOutline /> 8214
                </span>
                <br />
                <div className="rating-price">
                  <span className="rating">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />0.0
                    &nbsp;
                  </span>
                  <span className="main-price">
                    <span className="price">PKR38,000</span>PKR34,000
                  </span>
                </div>
                <button>Preview this Course</button>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-content">
              <img src={amazon} alt="" />
              <div className="content">
                <h5>
                  <a href="#">Development</a>
                </h5>
                <h3>
                  <a href="#">Front-End Course with projects</a>
                </h3>
                <span className="time">
                  <FaRegClock /> 3 Months
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <IoEyeOutline /> 8214
                </span>
                <br />
                <div className="rating-price">
                  <span className="rating">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />0.0
                    &nbsp;
                  </span>
                  <span className="main-price">
                    <span className="price">PKR38,000</span>PKR34,000
                  </span>
                </div>
                <button>Preview this Course</button>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-content">
              <img src={metaads} alt="" />
              <div className="content">
                <h5>
                  <a href="#">Development</a>
                </h5>
                <h3>
                  <a href="#">Front-End Course with projects</a>
                </h3>
                <span className="time">
                  <FaRegClock /> 3 Months
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <IoEyeOutline /> 8214
                </span>
                <br />
                <div className="rating-price">
                  <span className="rating">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />0.0
                    &nbsp;
                  </span>
                  <span className="main-price">
                    <span className="price">PKR38,000</span>PKR34,000
                  </span>
                </div>
                <button>Preview this Course</button>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-content">
              <img src={googleads} alt="" />
              <div className="content">
                <h5>
                  <a href="#">Development</a>
                </h5>
                <h3>
                  <a href="#">Front-End Course with projects</a>
                </h3>
                <span className="time">
                  <FaRegClock /> 3 Months
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <IoEyeOutline /> 8214
                </span>
                <br />
                <div className="rating-price">
                  <span className="rating">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />0.0
                    &nbsp;
                  </span>
                  <span className="main-price">
                    <span className="price">PKR38,000</span>PKR34,000
                  </span>
                </div>
                <button>Preview this Course</button>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-content">
              <img src={javascript} alt="" />
              <div className="content">
                <h5>
                  <a href="#">Development</a>
                </h5>
                <h3>
                  <a href="#">Front-End Course with projects</a>
                </h3>
                <span className="time">
                  <FaRegClock /> 3 Months
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <IoEyeOutline /> 8214
                </span>
                <br />
                <div className="rating-price">
                  <span className="rating">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />0.0
                    &nbsp;
                  </span>
                  <span className="main-price">
                    <span className="price">PKR38,000</span>PKR34,000
                  </span>
                </div>
                <button>Preview this Course</button>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-content">
              <img src={fba} alt="" />
              <div className="content">
                <h5>
                  <a href="#">Development</a>
                </h5>
                <h3>
                  <a href="#">Front-End Course with projects</a>
                </h3>
                <span className="time">
                  <FaRegClock /> 3 Months
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <IoEyeOutline /> 8214
                </span>
                <br />
                <div className="rating-price">
                  <span className="rating">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />0.0
                    &nbsp;
                  </span>
                  <span className="main-price">
                    <span className="price">PKR38,000</span>PKR34,000
                  </span>
                </div>
                <button>Preview this Course</button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
