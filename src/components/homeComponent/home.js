import React, { useState } from "react";
import Carousel1 from "../../assets/images/carousel1.jpg";
import Carousel2 from "../../assets/images/carousel2.jpg";
import Carousel3 from "../../assets/images/carousel3.jpg";
import Card1 from "../../assets/images/card1.jpg";
import Card2 from "../../assets/images/card2.jpg";
import Card3 from "../../assets/images/card3.jpg";
import Card4 from "../../assets/images/card4.jpg";
import Video from '../../assets/videos/bg-video.mp4';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, facebook } from '@fortawesome/free-solid-svg-icons';
import Azharu from "../../assets/images/Azharu.JPG";
import Busthan from "../../assets/images/Busthan.JPG";
import Junaid from "../../assets/images/Junaid.JPG";
import Sainu from "../../assets/images/Sainu.JPG";



import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { cardItem } from "../../assets/js/items"



const Home = (props) => {
  // const [cardContent, setCardContent] = useState(true);
  // const [homeContent, setHomeContent] = useState(false);
 

  
  

  // console.log(newItem);

  //  const contentHandler = (id) => {
  // //   setCardContent(false);
  // //   setHomeContent(true);

  // //   // setNewItem([ cardItem.filter(cardItem => cardItem.cardId === id)]);
  //     setNewItem(newItem.filter(cardItem => cardItem.cardId === id));

  //     console.log(newItem);
  //   return (
  //     <listItemContext.Provider  value={[newItem, setNewItem]}></listItemContext.Provider>
      
  //   )

    
    
  //  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     homeContent: true,
  //     cardContent: false,
  //     uid: [],
  //     newItem: [],
  //   };
  // }
// console.log(setNewItem);
 

  
    return (
      <div>
        {/* {cardContent ? ( */}
          <div className="home-wrapper">
            {/* <section id="landing" class="text-white">
            <video autoPlay muted loop class="position-fixed">
                <source src={Video} type="video/mp4"/>
            </video>


        </section> */}

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

            <div className="card-wrapper">
              <div className="row">
                {cardItem.map((cardItem, index) => (
                  <div key={index} className="col-lg-3 card-item">
                    <div className="card" style={{ width: "18rem" }}>
                      <img src={Card1} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{cardItem.cardTitle}</h5>
                        <p className="card-text">{cardItem.cardDescription}</p>
                        <div className="card-btn-wrapper">
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={`/${cardItem.cardId}/${cardItem.cardTitle}`}
                          >
                            <button
                              className="card-button"
                              //onClick={() => setNewItem(newItem.filter(cardItem => cardItem.cardId === index))}
                            >
                              Read More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div className="col-lg-3">
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
                        </div> */}
              </div>
            </div>
            <section id="our-team">
                <header>
                    <h2 className="text-center font-weight-light">Our Team</h2>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </header>
                <div className="row mt-4">
                    <div className="wow fadeInLeft col-lg-3 col-md-6 " data-wow-offset="150">
                        <div className="card overflow-hidden">
                            <img className="card-img" src={Azharu} alt="A person" />
                            <div className="position-absolute text-center text-white w-100 h-100 py-2 d-flex flex-column justify-content-center">
                                <p>Azharudheen</p>
                                <em className="small">Founder</em>
                                <div className="pt-3">
                                    <i className="px-1 fab fa-facebook"></i>
                                    <i className="px-1 fab fa-twitter"></i>
                                    <i className="px-1 fab fa-google-plus-g"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wow fadeInLeft col-lg-3 col-md-6 mt-5" data-wow-offset="150">
                        <div className="card overflow-hidden">
                            <img className="card-img" src={Busthan} alt="A person" />
                            <div className="position-absolute text-center text-white w-100 h-100 py-2 d-flex flex-column justify-content-center">
                                <p>Busthan</p>
                                <em className="small">Founder</em>
                                <div className="pt-3">
                                <FontAwesomeIcon icon={'fab', 'facebook'}  />
                                    {/* <i className="px-1 fab fa-facebook"></i>
                                    <i className="px-1 fab fa-twitter"></i>
                                    <i className="px-1 fab fa-google-plus-g"></i> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wow fadeInRight col-lg-3 col-md-6 mt-5" data-wow-offset="150">
                        <div class="card overflow-hidden">
                            <img class="card-img" src={Junaid} alt="A person" />
                            <div class="position-absolute text-center text-white w-100 h-100 py-2 d-flex flex-column justify-content-center">
                                <p>Junaid</p>
                                <em class="small">Founder</em>
                                <div class="pt-3">
                                    <i class="px-1 fab fa-facebook"></i>
                                    <i class="px-1 fab fa-twitter"></i>
                                    <i class="px-1 fab fa-google-plus-g"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wow fadeInRight col-lg-3 col-md-6 " data-wow-offset="150">
                        <div class="card overflow-hidden">
                            <img class="card-img" src={Sainu} alt="A person" />
                            <div class="position-absolute text-center text-white w-100 h-100 py-2 d-flex flex-column justify-content-center">
                                <p>Sainudheen</p>
                                <em class="small">Founder</em>
                                <div class="pt-3">
                                    <i class="px-1 fab fa-facebook"></i>
                                    <i class="px-1 fab fa-twitter"></i>
                                    <i class="px-1 fab fa-google-plus-g"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </section>




            <div className="bottom-list-wrapper">
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
            </div>
            

       
          </div>
        {/* ) : (
          ""
        )} */}

        {/* {setHomeContent ? (
          <div className="about-body">
             {newItem.map((card, index) => ( 
              <div key={index} >
                <h1>{card.cardTitle}</h1>
              </div>
             ))} 
          </div>
        ) : (
          ""
        )} */}
      </div>
    );
  }
  
  

export default Home;


