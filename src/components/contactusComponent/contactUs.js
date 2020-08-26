import React, {Component} from 'react';
import AboutImage from '../../assets/images/about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mobile: '',
            email: '',
            contact: true,
            query: false,
            active: true,
            sent: false,
            buttonText: 'Send Message'

        }
    }

    contactUs=()=> {

        this.setState({
            contact: true,
            query: false,
            

        })
    }

    queryUs=()=> {
        this.setState({
            query: true,
            contact: false

        })
    }

    handleChange=(e)=> {
        this.setState({
            [e.target.name]: e.target.value
         })
    }

    formSubmit = (e) => {
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.mobile);

      
        
        
      }

      resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            buttonText: 'Message Sent'
        })
    }

  

    render() {
        
        
        return(
            <div className="container">
                  
                <div className="about-body">
                <div className="tab-body">
                      <button className="tabActiveButton" onClick={this.contactUs}>Contact Us</button>
                      <button className="tabActiveButton" onClick={this.queryUs}>Any Queries</button>
                  </div>
                  {this.state.contact?
                    <div className="about-wrapper">
                        <div className="masthead">
                            <div className="masthead__wrap">
                                <span className="masthead__title" aria-hidden="true">
                                    Contact Us 		
                                </span>
                            </div>
                        </div>
                        <div className="about-content">
                            <div className="row">
                                <div className="col-4">
                                    <span><img className="about-img" src={AboutImage}  alt="Abt" /></span>
                                </div>
                                <div className="col-8">
                                    <div className="art-homes-heading"><span>Art Homes Group</span></div>
                                    <div><span><FontAwesomeIcon icon={faMapMarkerAlt} className="adress-icon" /></span><span>Opposite D.I.S Girls School</span></div>
                                    <div className="margin-left35"><span>Al Noor Complex</span></div>
                                    <div className="margin-left35"><span>Kannur, Kerala</span></div>
                                    <div><span><FontAwesomeIcon icon={faEnvelope} className="adress-icon" /></span><span>arthomesgroupknr@gmail.com</span></div>
                                    <div><span><FontAwesomeIcon icon={faPhone} className="adress-icon" /></span><span>08281562821</span></div>
                                </div>
                            </div>
                        </div>   
                    </div>
                      :" "
                    }
                </div>
                {this.state.query?
                <div className="query-body">
                    <div className="about-wrapper">
                    <form className="contact-form" onSubmit={this.formSubmit}>
                        <div className="mb-2">

                            <input type="text" name="name" value={this.state.name} placeholder="FullName" onChange={this.handleChange}/>
                        </div>
                       
                        <div className="mb-2">
                            <input type="text" name="mobile" value={this.state.mobile} placeholder="Mobile No" onChange={this.handleChange}/>

                        </div>
                        <div className="mb-2">
                            <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange}/>
                        </div>
                        <div className="mb-2">
                            <button>Submit</button>
                        </div>
                        </form>
                     </div>   
                </div>
                  :" "
                }
            </div>
        )
    }
}

export default Contact;