import React, { Component } from "react";
import AboutImage from "../../assets/images/about.jpg";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="about-body">
          <div className="about-wrapper">
            <div class="masthead">
              <div class="masthead__wrap">
                <h1 class="masthead__title" aria-hidden="true">
                  About Us
                </h1>
              </div>
            </div>
            <div className="about-content row justify-content-center">
              <div className="mr-3">
                <span>
                  <img className="about-img" src={AboutImage} alt="abt" />
                </span>
              </div>
              <div className="mr-3">
                <span>
                  <img className="about-img" src={AboutImage} alt="abt" />
                </span>
              </div>
              <div className="mr-3">
                <span>
                  <img className="about-img" src={AboutImage} alt="abt" />
                </span>
              </div>

              <p>
                Art homes Group is a company owned by a young enthusiastic minds
                whose aim is to bring a new revolution in building and
                infrastructure . Over the years, we have helped many people
                realize the dream of building a home. When you have a home
                built, you are not only buying a product, but also a service. As
                an experienced custom home builder, we have the ability to
                control the quality of our workmanship to the highest standards.
                We employ only qualified personnel who are committed to
                upholding this high level of excellence. We strive to give the
                best possible service before, during, and after the construction
                process.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
