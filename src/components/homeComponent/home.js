import React, { useState } from "react";
import Carousel3 from "../../assets/images/bgimage.jpg";
import Carousel2 from "../../assets/images/carousel2.jpg";
import card3 from "../../assets/images/card3.jpg";

import Video from "../../assets/videos/bg-video.mp4";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Design1 from "../../assets/images/design1.jpg";
import Design2 from "../../assets/images/design2.jpg";
import Design3 from "../../assets/images/design3.jpg";
import Design4 from "../../assets/images/design4.jpg";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { cardItem } from "../../assets/js/items";

const Home = (props) => {
  return (
    <div className="home-wrapper">
      <div className="row">
        <div className="carousel-wrapper">
          <Carousel autoPlay infiniteLoop>
            <div className="carousel-image">
              <img src={card3} alt="carousel pic" />
              <p className="">Legend 1</p>
            </div>
            <div className="carousel-image">
              <img src={Carousel2} alt="carousel pic" />
            </div>
            <div className="carousel-image">
              <img src={Carousel3} alt="carousel pic" />
            </div>
          </Carousel>
        </div>
        <div className="card-wrapper">
          {cardItem.map((cardItem, index) => (
            <div key={index} className="card " style={{ width: "18rem" }}>
              <img
                src={cardItem.cardImage}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{cardItem.cardTitle}</h5>
                <p className="card-text">{cardItem.cardDescription}</p>
                <div className="card-btn-wrapper">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/${cardItem.cardId}/${cardItem.cardTitle}`}
                  >
                    <button className="card-button">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <section id="our-team">
          <header>
            <h2 className="text-center font-weight-light">Our Designs</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </header>
          <div className="row mt-4">
            <div
              className="wow fadeInLeft col-lg-3 col-md-6 "
              data-wow-offset="150"
            >
              <div className="card overflow-hidden">
                <img className="card-img" src={Design1} alt="A person" />
                <div className="position-absolute text-center text-white w-100 h-100 py-2 d-flex flex-column justify-content-center">
                  <p>Bed Room Design</p>
                  <em className="small">Bed Room</em>
                  <div className="pt-3">
                    <a
                      className="media-icon"
                      href="https://www.facebook.com/ArtHomesgroup-702686376855867"
                    >
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                    <a className="media-icon" href="">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                    <a
                      className="media-icon"
                      href="https://www.instagram.com/art_homes_grp/"
                    >
                      <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </a>
                    <a className="media-icon" href="">
                      <FontAwesomeIcon icon={["fab", "youtube"]} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="wow fadeInLeft col-lg-3 col-md-6 mt-5"
              data-wow-offset="150"
            >
              <div className="card overflow-hidden">
                <img className="card-img" src={Design2} alt="A person" />
                <div className="position-absolute text-center text-white w-100 h-100 py-2 d-flex flex-column justify-content-center">
                  <p>Residential Home Design</p>
                  <em className="small">Residential Home</em>
                  <div className="pt-3">
                    <a className="media-icon" href="">
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                    <a className="media-icon" href="">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                    <a className="media-icon" href="">
                      <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </a>
                    <a className="media-icon" href="">
                      <FontAwesomeIcon icon={["fab", "youtube"]} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="wow fadeInRight col-lg-3 col-md-6 mt-5"
              data-wow-offset="150"
            >
              <div class="card overflow-hidden">
                <img class="card-img" src={Design3} alt="A person" />
                <div class="position-absolute text-center text-white w-100 h-100 py-2 d-flex flex-column justify-content-center">
                  <p>Dining Space Design</p>
                  <em class="small">Dining Space</em>
                  <div class="pt-3">
                    <a className="media-icon" href="">
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                    <a className="media-icon" href="">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                    <a className="media-icon" href="">
                      <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </a>
                    <a className="media-icon" href="">
                      <FontAwesomeIcon icon={["fab", "youtube"]} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="wow fadeInRight col-lg-3 col-md-6 "
              data-wow-offset="150"
            >
              <div class="card overflow-hidden">
                <img class="card-img" src={Design4} alt="A person" />
                <div class="position-absolute text-center text-white w-100 h-100 py-2 d-flex flex-column justify-content-center">
                  <p>Resort Design</p>
                  <em class="small">Resort</em>
                  <div class="pt-3">
                    <a className="media-icon" href="">
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                    <a className="media-icon" href="">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                    <a className="media-icon" href="">
                      <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </a>
                    <a className="media-icon" href="">
                      <FontAwesomeIcon icon={["fab", "youtube"]} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="bottom-list-wrapper">
          <div className="row padding20">
            <div className="col-lg-4">
              <div className="bottom-list">
                <span className="bottom-list-head">Our Projects</span>
                <ul className="bottom-list-item">
                  <li className="bottom-list-link">
                    <a className="" href="">
                      Ongoing Projects
                    </a>
                  </li>
                  <li className="bottom-list-link">
                    <a className="" href="">
                      Upcoming Projects
                    </a>
                  </li>
                  <li className="bottom-list-link">
                    <a className="" href="">
                      Completed Projects
                    </a>
                  </li>
                  <li className="bottom-list-link">
                    <a className="" href="">
                      Our Designs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bottom-list">
                <span className="bottom-list-head">Our Projects</span>
                <ul className="bottom-list-item">
                  <li className="bottom-list-link">
                    <a className="" href="">
                      Ongoing Projects
                    </a>
                  </li>
                  <li className="bottom-list-link">
                    <a className="" href="">
                      Upcoming Projects
                    </a>
                  </li>
                  <li className="bottom-list-link">
                    <a className="" href="">
                      Completed Projects
                    </a>
                  </li>
                  <li className="bottom-list-link">
                    <a className="" href="">
                      Our Designs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bottom-list">
                <span className="bottom-list-head">Our Projects</span>
                <ul className="bottom-list-item">
                  <li className="bottom-list-link">
                    <a className="" href="">
                      Ongoing Projects
                    </a>
                  </li>
                  <li className="bottom-list-link">
                    <a className="" href="">
                      Upcoming Projects
                    </a>
                  </li>
                  <li className="bottom-list-link">
                    <a className="" href="">
                      Completed Projects
                    </a>
                  </li>
                  <li className="bottom-list-link">
                    <a className="" href="">
                      Our Designs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
