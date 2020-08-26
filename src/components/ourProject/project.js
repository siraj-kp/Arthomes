import React, {Component} from 'react'
//import AboutImage from '../../assets/images/about.jpg'
import Carousel1 from '../../assets/images/carousel1.jpg';
import Carousel2 from '../../assets/images/carousel2.jpg';
import Carousel3 from '../../assets/images/carousel3.jpg';
import Video from '../../assets/videos/bg-video.mp4';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class OurProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: true,
            designs: false,
        }
    }

    ourprojects=()=> {

        this.setState({
            projects: true,
            designs: false,
            

        })
    }

    ourdesigns=()=> {
        this.setState({
            designs: true,
            projects: false

        })
    }

    render() {
        return(
            <div className="container">

                <div className="about-body ">
                <div className="tab-body">
                      <button className="tabActiveButton" onClick={this.ourprojects}>Our Projects</button>
                      <button className="tabActiveButton" onClick={this.ourdesigns}>Our Designs</button>
                  </div>
                  {this.state.projects?
                    <div className="about-wrapper">
                        <div class="masthead">
                            <div class="masthead__wrap">
                                <h1 class="masthead__title" aria-hidden="true">
                                    Our Projects		
                                </h1>
                            </div>
                        </div>
                        <div className="about-content">
                            <p>Art homes Group is a company owned by a young enthusiastic minds whose aim is to bring a new revolution in building and infrastructure . Over the years, we have helped many people realize the dream of building a home.</p>
                        
                        <div className="">
                        <Carousel >
                            
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
                            <p>When you have a home built, you are not only buying a product, but also a service. As an experienced custom home builder, we have the ability to control the quality of our workmanship to the highest standards. We employ only qualified personnel who are committed to upholding this high level of excellence. We strive to give the best possible service before, during, and after the construction process.</p>
                        </div>   
                    </div>
                :" "
            }
                {this.state.designs?
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
                      <video  controls className="card-img-top">
                                    <source src={Video} type="video/mp4"/>
                                </video>
                                <div className="card-body">
                        <h5 className="card-title">Resort</h5>
                        <p className="card-text">Art homes Group is a company owned by a young enthusiastic minds whose aim is to bring a new revolution in building and infrastructure . Over the years, we have helped many people realize the dream of building a home.</p>
                        
                      </div>
                    </div>
                    <div className="card mr-5" style={{ width: "30rem" }}>
                      <video  controls className="card-img-top">
                                    <source src={Video} type="video/mp4"/>
                                </video>
                                <div className="card-body">
                                <h5 className="card-title">Resort</h5>
                        <p className="card-text">Art homes Group is a company owned by a young enthusiastic minds whose aim is to bring a new revolution in building and infrastructure . Over the years, we have helped many people realize the dream of building a home.</p>
                    </div>
                    </div>
                        {/* <div className="ml-5 mt-5 " >
                                <video  controls >
                                    <source src={Video} type="video/mp4"/>
                                </video>
                            </div>
                            <div className="ml-5 mt-5">
                                <video  controls >
                                    <source src={Video} type="video/mp4"/>
                                </video>
                            </div>
                            <div className="ml-5 mt-5">
                                <video  controls >
                                    <source src={Video} type="video/mp4"/>
                                </video>
                            </div>
                            <div className="ml-5 mt-5">
                                <video  controls >
                                    <source src={Video} type="video/mp4"/>
                                </video>
                            </div> */}
                        {/* <Carousel >
                            
                            <div>
                                <img src={Carousel1} alt="carousel pic" />
                            </div>
                            <div>
                                <img src={Carousel2} alt="carousel pic" />
                            </div>
                            <div>
                            <img src={Carousel3} alt="carousel pic" />
                            </div>
                        </Carousel>  */}
                        </div>
                            {/* <p>When you have a home built, you are not only buying a product, but also a service. As an experienced custom home builder, we have the ability to control the quality of our workmanship to the highest standards. We employ only qualified personnel who are committed to upholding this high level of excellence. We strive to give the best possible service before, during, and after the construction process.</p> */}
                        </div>   
                    </div>
                      :" "
                    }
                </div>
            </div>
        )
    }
}

export default OurProject;