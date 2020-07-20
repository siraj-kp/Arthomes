import React, { Component } from 'react';
import Carousel1 from '../../assets/images/carousel1.jpg';
import Carousel2 from '../../assets/images/carousel2.jpg';
import Carousel3 from '../../assets/images/carousel3.jpg';
import Card1 from '../../assets/images/card1.jpg';
import Card2 from '../../assets/images/card2.jpg';
import Card3 from '../../assets/images/card3.jpg';
import Card4 from '../../assets/images/card4.jpg';
//import Video from '../../assets/videos/video.mp4';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="home-wrapper">



            {/* <section id="landing" class="text-white">
            <video autoPlay muted loop class="position-fixed">
                <source src={Video} type="video/mp4"/>
            </video>


        </section> */}


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

                <div className="card-wrapper">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={Card1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="card-btn-wrapper">
                                    <a href="#"><button className="card-button">View More</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={Card2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="card-btn-wrapper">
                                    <a href="#"><button className="card-button">View More</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={Card3} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="card-btn-wrapper">
                                    <a href="#"><button className="card-button">View More</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={Card4} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="card-btn-wrapper">
                                    <a href="#"><button className="card-button">View More</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-list-wrapper">
                <div className="row padding20">
                        <div className="col-lg-4">
                            <div className="bottom-list">
                                <span className="bottom-list-head">Our Projects</span>
                                <ul className="bottom-list-item">
                                    <li className="bottom-list-link"><a className="" href="">Ongoing Projects</a></li>
                                    <li className="bottom-list-link"><a className="" href="">Upcoming Projects</a></li>
                                    <li className="bottom-list-link"><a className="" href="">Completed Projects</a></li>
                                    <li className="bottom-list-link"><a className="" href="">Our Designs</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="bottom-list">
                                <span className="bottom-list-head">Our Projects</span>
                                <ul className="bottom-list-item">
                                    <li className="bottom-list-link"><a className="" href="">Ongoing Projects</a></li>
                                    <li className="bottom-list-link"><a className="" href="">Upcoming Projects</a></li>
                                    <li className="bottom-list-link"><a className="" href="">Completed Projects</a></li>
                                    <li className="bottom-list-link"><a className="" href="">Our Designs</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="bottom-list">
                                <span className="bottom-list-head">Our Projects</span>
                                <ul className="bottom-list-item">
                                    <li className="bottom-list-link"><a className="" href="">Ongoing Projects</a></li>
                                    <li className="bottom-list-link"><a className="" href="">Upcoming Projects</a></li>
                                    <li className="bottom-list-link"><a className="" href="">Completed Projects</a></li>
                                    <li className="bottom-list-link"><a className="" href="">Our Designs</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Home;