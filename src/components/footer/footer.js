import React from "react";
import "./footer.css"
import {SiFacebook} from "react-icons/si"
import {BsInstagram} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
function Footer(){
    return(
        <footer id="footer">
            <a href="#" className="footer__logo">Vivek</a>
            <ul className="premalinks">
            <li href="#">Home</li>
            <li href="#about">About</li>
            <li href="#experience">Experience</li>
            <li href="#services">Services</li>
            <li href="#portfolio">Portfolio</li>
            <li href="#testimonials">Testimonials</li>
            <li href="#contact">Contact</li>
            </ul>
            <div className="footer__socials">
                <a href="https://facebook.com"> <SiFacebook className="footer__icon"/></a>
                <a href="https://instagram.com"><BsInstagram className="footer__icon"/></a>
                <a href="https://linkedin.com"><BsLinkedin className="footer__icon"/></a>
            </div>
            <div className="copyright">
                <small>&copy;Challenging Tutorials. All right reserved.</small>
            </div>
        </footer>
    )
}
export default Footer;