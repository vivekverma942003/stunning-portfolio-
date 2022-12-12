import React from "react";
import "./nav.css"
import {ImHome} from "react-icons/im"
import {FcAbout} from "react-icons/fc"
import {GrServices} from "react-icons/gr"
import {MdOutlineContactPhone} from "react-icons/md"
import {GiNotebook} from "react-icons/gi"
import {useState} from 'react'
function Nav(){
    const[activeNav,setActiveNav]=useState("#")
    return(
        <nav>
            <a href="#" onClick={()=>{setActiveNav("#")}} className={activeNav==="#" ? "active" : ""}><ImHome/></a>
            <a href="#about"onClick={()=>{setActiveNav("#about")}} className={activeNav==="#about" ? "active" : ""}><FcAbout/></a>
            <a href="#experience"onClick={()=>{setActiveNav("#experience")}} className={activeNav==="#experience" ? "active" : ""}><GiNotebook/></a>
            <a href="#services"onClick={()=>{setActiveNav("#services")}} className={activeNav==="#services" ? "active" : ""}><GrServices/></a>
            <a href="#contact"onClick={()=>{setActiveNav("#contact")}} className={activeNav==="#contact" ? "active" : ""}> <MdOutlineContactPhone/></a>
        </nav>
    )
}
export default  Nav;