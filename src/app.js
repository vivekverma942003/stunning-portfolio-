import React from "react"
import Header from "./components/header/header"
import Nav from "./components/nav/nav"
import About from "./components/about/about"
import Testimonial from "./components/testimonial/testimonials"
import Experience from "./components/experience/experience"
import Services from "./components/services/services"
import Portfolio from "./components/portfolio/portfolio"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"
function App(){
    return(
        <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        </>
    )
}
export default App;