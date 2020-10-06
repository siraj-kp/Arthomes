import React, { Component } from "react";
//import AboutImage from '../../assets/images/about.jpg'
import Carousel1 from "../../assets/images/carousel1.jpg";
import Carousel2 from "../../assets/images/carousel2.jpg";
import Carousel3 from "../../assets/images/carousel3.jpg";
import Video from "../../assets/videos/bg-video.mp4";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Design1 from "../../assets/images/design1.jpg";
import Design2 from "../../assets/images/design2.jpg";
import Design3 from "../../assets/images/design3.jpg";
import Design4 from "../../assets/images/design4.jpg";

class OurProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: true,
      designs: false,
    };
  }

  ourprojects = () => {
    this.setState({
      projects: true,
      designs: false,
    });
  };

  ourdesigns = () => {
    this.setState({
      designs: true,
      projects: false,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="about-body ">
          <div className="tab-body">
            <button
              className={
                this.state.projects ? "tabActiveButton" : "tabDeactiveButton"
              }
              onClick={this.ourprojects}
            >
              Our Projects
            </button>
            <button
              className={
                this.state.designs ? "tabActiveButton" : "tabDeactiveButton"
              }
              onClick={this.ourdesigns}
            >
              Our Designs
            </button>
          </div>
          {this.state.projects ? (
            <div className="about-wrapper">
              <div class="masthead">
                <div class="masthead__wrap">
                  <h1 class="masthead__title" aria-hidden="true">
                    Our Projects
                  </h1>
                </div>
              </div>
              <section id="our-team">
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
              <div className="about-content">
                <p>
                  Art homes Group is a company owned by a young enthusiastic
                  minds whose aim is to bring a new revolution in building and
                  infrastructure . Over the years, we have helped many people
                  realize the dream of building a home. When you have a home
                  built, you are not only buying a product, but also a service.
                  As an experienced custom home builder, we have the ability to
                  control the quality of our workmanship to the highest
                  standards. We employ only qualified personnel who are
                  committed to upholding this high level of excellence. We
                  strive to give the best possible service before, during, and
                  after the construction process.
                </p>

                <div className="">
                  <Carousel autoPlay infiniteLoop>
                    <div>
                      <img src={Carousel1} alt="carousel pic" />
                    </div>
                    <div>
                      <img src={Carousel2} alt="carousel pic" />
                    </div>
                    <div>
                      <img src={Carousel3} alt="carousel pic" />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          ) : (
            " "
          )}
          {this.state.designs ? (
            <div className="about-wrapper">
              <div class="masthead">
                <div class="masthead__wrap">
                  <h1 class="masthead__title" aria-hidden="true">
                    Our Designs
                  </h1>
                </div>
              </div>
              <div className="about-content">
                {/* <p>Art homes Group is a company owned by a young enthusiastic minds whose aim is to bring a new revolution in building and infrastructure . Over the years, we have helped many people realize the dream of building a home.</p> */}

                <div className="row justify-content-center">
                  <div className="card mr-5" style={{ width: "30rem" }}>
                    {/* <iframe
                      src="https://www.youtube.com/embed/ctxfEkJMUck?list=PLm4speAdkxNLZdUbJ4f708i_VZ7thEvdW"
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowfullscreen="true"
                      title="video"
                      height="250"
                    /> */}

                    <video controls className="card-img-top">
                      <source src={Video} type="video/mp4" />
                    </video>
                    <div className="card-body">
                      <h5 className="card-title">Resort</h5>
                      <p className="card-text">
                        Art homes Group is a company owned by a young
                        enthusiastic minds whose aim is to bring a new
                        revolution in building and infrastructure . Over the
                        years, we have helped many people realize the dream of
                        building a home.
                      </p>
                    </div>
                  </div>
                  <div className="card mr-5" style={{ width: "30rem" }}>
                    {/* <iframe
                      height="250"
                      src="https://www.youtube.com/embed/KMvKMojyGWE"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    /> */}
                    <video controls className="card-img-top">
                      <source src={Video} type="video/mp4" />
                    </video>
                    <div className="card-body">
                      <h5 className="card-title">Resort</h5>
                      <p className="card-text">
                        Art homes Group is a company owned by a young
                        enthusiastic minds whose aim is to bring a new
                        revolution in building and infrastructure . Over the
                        years, we have helped many people realize the dream of
                        building a home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
    );
  }
}

export default OurProject;
