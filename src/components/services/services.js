import React from "react";
import "./services.css"
import {BsCheckLg} from "react-icons/bs"
function Services(){
    return(
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                <article className="service">
                <div className="service__head">
                    <h3>UI/UX Design</h3>
                </div>
                <ul className="service__list">
                    <li><BsCheckLg className="service__icon"/>
                    <p>This is the only check symbol for the project.</p></li>
                    <li><BsCheckLg className="service__icon"/>
                    <p>This is the only check symbol for the project.</p></li>
                    <li><BsCheckLg className="service__icon"/>
                    <p>This is the only check symbol for the project.</p></li>
                    <li><BsCheckLg className="service__icon"/>
                    <p>This is the only check symbol for the project.</p></li>
                    <li><BsCheckLg className="service__icon"/>
                    <p>This is the only check symbol for the project.</p></li>
                    
                </ul>
                </article>
                <article className="service">
                <div className="service__head">
                    <h3>Web Development</h3>
                </div>
                <ul className="service__list">
                    <li><BsCheckLg className="service__icon"/>
                    <p>This is the only check symbol for the project.</p></li>
                    <li><BsCheckLg className="service__icon"/>
                    <p>This is the only check symbol for the project.</p></li>
                    <li><BsCheckLg className="service__icon"/>
                    <p>This is the only check symbol for the project.</p></li>
                    <li><BsCheckLg className="service__icon"/>
                    <p>This is the only check symbol for the project.</p></li>
                    <li><BsCheckLg className="service__icon"/>
                    <p>This is the only check symbol for the project.</p></li>
                    
                </ul>
                </article>
                <article className="service">
                <div className="service__head">
                    <h3>Content Creator</h3>
                </div>
                <ul className="service__list">
                    <li><BsCheckLg className="service__icon"/>
                    <p>This is the only check symbol for the project.</p></li>
                    <li><BsCheckLg className="service__icon"/>
                    <p>This is the only check symbol for the project.</p></li>
                    <li><BsCheckLg className="service__icon"/>
                    <p>This is the only check symbol for the project.</p></li>
                    <li><BsCheckLg className="service__icon"/>
                    <p>This is the only check symbol for the project.</p></li>
                    <li><BsCheckLg className="service__icon"/>
                    <p>This is the only check symbol for the project.</p></li>
                    
                </ul>
                </article>
            </div>
           
        </section>
    )
}
export default Services;