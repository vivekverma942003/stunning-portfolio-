import React from "react"
import "./experience.css"
import {TbBrandJavascript} from "react-icons/tb"
import {BsBootstrapFill} from "react-icons/bs"
import {SiCss3} from "react-icons/si"
import {BsFillPatchCheckFill} from "react-icons/bs"
import {FaReact} from "react-icons/fa"
import {SiTailwindcss} from "react-icons/si"
function Experience(){
    return(
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                        <BsFillPatchCheckFill className="experience__icon"/>
                        <div><h4>HTML</h4>
                        <small className="text-light">Expereinced</small>
                        </div>
                        </article>
                        <article className="experience__details">
                        <SiCss3 className="experience__icon"/>
                        <div>
                        <h4>CSS</h4>
                        <small className="text-light">Expereinced</small>
                        </div>

                        </article>
                        <article className="experience__details">
                        <TbBrandJavascript className="experience__icon"/>
                        <div>
                        <h4>JAVASCRIPT</h4>
                        <small className="text-light">Expereinced</small>
                        </div>

                        </article>
                        <article className="experience__details">
                        <BsBootstrapFill className="experience__icon"/>
                        <div>
                        <h4>BOOTSTRAP</h4>
                        <small className="text-light">Expereinced</small>

                        </div>
                        </article>
                        <article className="experience__details">
                        <FaReact className="experience__icon"/>
                        <div>
                        <h4>REACT JS</h4>
                        <small className="text-light">Expereinced</small>
                        </div>

                        </article>
                        <article className="experience__details">
                        <SiTailwindcss className="experience__icon"/>
                        <div>
                        <h4>Tailwind</h4>
                        <small className="text-light">Learning</small>
                        </div>

                        </article>
                    </div>

                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                        <BsFillPatchCheckFill className="experience__icon"/>
                        <div>
                        <h4>Node JS</h4>
                        <small className="text-light">Expereinced</small>
                        </div>

                        </article>
                        <article className="experience__details">
                        <SiCss3 className="experience__icon"/>
                        <div>
                        <h4>MongoDB</h4>
                        <small className="text-light">Expereinced</small>

                        </div>
                        </article>
                        <article className="experience__details">
                        <TbBrandJavascript className="experience__icon"/>
                        <div>
                        <h4>PHP</h4>
                        <small className="text-light">Expereinced</small>
                        </div>

                        </article>
                        <article className="experience__details">
                        <BsBootstrapFill className="experience__icon"/>
                        <div>
                        <h4>MY SQL</h4>
                        <small className="text-light">Expereinced</small>
                        </div>

                        </article>
                        <article className="experience__details">
                        <FaReact className="experience__icon"/>
                        <div>
                        <h4>Python</h4>
                        <small className="text-light">Expereinced</small>
                        </div>

                        </article>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience;