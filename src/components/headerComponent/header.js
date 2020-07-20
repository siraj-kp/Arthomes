import React, {Component} from 'react'
import Headerlogo from '../../assets/images/art-homes-logo1.png'

class Header extends Component {
    render() {
        return (
           
            <div className="header-wrapper">
                <nav className="menu">
                    <a className="logo-wrapper" href="/" ><img src={Headerlogo} alt="" className="menu__logo" /></a>
                    <div className="menu__right">
                        <ul className="menu__list">
                            <li className="menu__list-item"><a className="menu__link menu__link--active" href="/">Home</a></li>
                            <li className="menu__list-item"><a className="menu__link" href="/our_projects">Our Projects</a></li>
                            <li className="menu__list-item"><a className="menu__link" href="/about">About us</a></li>
                            <li className="menu__list-item"><a className="menu__link" href="/contact">Contact us</a></li>

                        </ul>
                    </div>
                </nav>
            </div>
        
        )
    }
}

export default Header;