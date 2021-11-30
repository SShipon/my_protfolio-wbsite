import React from "react";
import "./Project.css";
import Project1 from "../../img/portfolio1 (1).jpg";
import Project2 from "../../img/portfolio1 (2).jpg";
import Project3 from "../../img/portfolio1 (3).jpg";
import Project4 from "../../img/portfolio1 (4).jpg";
import Project5 from "../../img/portfolio1 (5).jpg";
import Project6 from "../../img/portfolio1 (6).jpg";

function Project() {

  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          It’s free and easy to post a job. Simply fill in a title, description
        </p>
        <p className="heading p__color">
          and budget and competitive bids come within minutes.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Medical Care</h5>
                <h4 className="project__text">
                  However, patients from anywhere else
                </h4>

                <a
                  href="https://assignment-10-9b115.web.app/"
                  className="project__btn"
                >
                  View DetailsS
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project5} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Travels & Tour</h5>
                <h4 className="project__text">
                  travel to the most beautiful places in the
                </h4>
                <a
                  href="https://assignment-11-client-site.web.app/"
                  className="project__btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Cars Zone</h5>
                <h4 className="project__text">
                  Cars Direct from Dealership. Lease BMW X1
                </h4>
                <a
                  href="https://assignment-12-clintsite.web.app/"
                  className="project__btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Online Course</h5>
                <h4 className="project__text">
                  Immerse yourself in real-world learning. Gain the skills
                </h4>
                <a href="" className="project__btn">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Recipes and cook</h5>
                <h4 className="project__text">
                  Recipes selected throughout the week by Sam food The New York
                  Times.
                </h4>
                <a href="#" className="project__btn">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project6} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Doctor Portal</h5>
                <h4 className="project__text">
                  solutions are affordable and reliable. Moreover, such
                </h4>
                <a href="#" className="project__btn">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <button className="view__more pointer btn">View more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
