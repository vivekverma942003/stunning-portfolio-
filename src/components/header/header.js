import React from "react"
import "./header.css"
import CTA from "./CTA"
import Headersocial from "./headerSocial"
import ME from "../../assets/ME.jpg"
function Header(){
    return(
        <header>
            <div className="container header__container">
            <h5>Hello  I'm</h5>
            <h1>Vivek Kumar Verma</h1>
            <h5 className="text-light"> Frontend Developer</h5>
            <CTA/>
            <Headersocial/>
            <div className="me">
            <img src={ME} alt="my image is not loaded"/>
            </div>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>

        </header>
    )
}
export default Header;