import React from "react";
import "./about.css"
import ME from "../../assets/ME.jpg"
import {IoIosSchool} from "react-icons/io"
import {GrLanguage} from "react-icons/gr"
import {GrProjects} from "react-icons/gr"
function About(){
    return(
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                    <img src={ME} alt="reload my image"/>

                    </div>
                    </div>
                <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                    <IoIosSchool className="about__icon"/> <h5>My Education</h5><small>Pursuing B-tech </small><small>Second Year Student</small>
                    </article>
                    <article className="about__card">
                    <GrLanguage className="about__icon"/><h5>My Skills</h5>
                    <small>HTML,CSS,JAVASCRIPT, </small>
                    <small>REACT JS</small>
                    </article>
                    <article className="about__card">
                    <GrProjects className="about__icon"/>
                    <h5>Projects</h5>
                    <small>10 Projects Completed</small>
                    </article>
                </div>
                <p>This is my portfolio . I have mentioned all my details on this website.
                You can visit my other sections of the page in which i have mentioned the different details about myslef.
                I am currently searching for part time job or internship in the frontend development.
                I have completed my frontend part and have completed many projects in the frontend development.
                </p>
                <a href="#contact" className="btn btn-primary"> Let's Talk</a>
                </div>
            </div>
        </section>
    )
}
export default About;