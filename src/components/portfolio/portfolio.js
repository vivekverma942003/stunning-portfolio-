import React from "react";
import "./portfolio.css"
import IMG1 from "../../assets/N1.jpg"
import IMG2 from "../../assets/N2.jpg"
import IMG3 from "../../assets/N3.jpg"
import IMG4 from "../../assets/N4.jpg"
import IMG5 from "../../assets/N6.jpg"
import IMG6 from "../../assets/N7.jpg"
const Data =[
    {
        id:1,
        image:IMG1,
        title:"This is my project",
        github:"https://github.com",
        demo:"https://github.com/vivekverma942003/my-react-projects"
    },
    {
        id:2,
        image:IMG2,
        title:"This is my project",
        github:"https://github.com",
        demo:"https://github.com/vivekverma942003/my-react-projects"
    },
    {
        id:13,
        image:IMG3,
        title:"This is my project",
        github:"https://github.com",
        demo:"https://github.com/vivekverma942003/my-react-projects"
    },
    {
        id:4,
        image:IMG4,
        title:"This is my project",
        github:"https://github.com",
        demo:"https://github.com/vivekverma942003/my-react-projects"
    },
    {
        id:5,
        image:IMG5,
        title:"This is my project",
        github:"https://github.com",
        demo:"https://github.com/vivekverma942003/my-react-projects"
    },
    {
        id:6,
        image:IMG6,
        title:"This is my project",
        github:"https://github.com",
        demo:"https://github.com/vivekverma942003/my-react-projects"
    }
]






function Portfolio(){
    return(
        <section id="portfolio">
            <h5>My Educational Journey</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    Data.map(({id,image,title,github,demo})=>{
                        return(
                            <article key={id} className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={image} alt={title}/>
                    </div>
                            <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                        <a href={github} className="btn" target="_blank"> Github</a>
                        <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                        </div>
                </article>
                        )
                    })
                }
                
            </div>
        </section>
    )
}
export default Portfolio;
