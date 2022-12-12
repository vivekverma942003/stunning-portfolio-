import React  from "react"
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {GrInstagram} from "react-icons/gr"
function Headersocial(){
    return(
        <div className="header__social">
            <a href=""><BsLinkedin/></a>
            <a href=""><FaGithub/></a>
            <a href=""><GrInstagram/></a>
        </div>
    )
}
export default Headersocial;