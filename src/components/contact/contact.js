import React from "react"
import "./contact.css"
import {GrFacebook} from "react-icons/gr"
import {MdOutlineMarkEmailRead} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"
import {useRef} from "react"
import emailjs from "emailjs-com"
function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dqv0xsv', 'template_7zq5b4d', form.current, '6BQBuYus3R3-Tr3Dz')
            e.target.reset();
      };
    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMarkEmailRead className="contact__icons"/>
                        <h4>E-mail</h4>
                        <h5>vivekverma942003@gmail.com</h5>
                        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">Send A Message</a>
                    </article>
                    <article className="contact__option">
                        <GrFacebook className="contact__icons"/>
                        <h4>Facebook</h4>
                        <h5>Vivek Verma</h5>
                        <a href="https://www.facebook.com/profile.php?id=100009629087144" target="_blank">Send A Message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__icons"/>
                        <h4>Whatsapp</h4>
                        <h5>8840432962</h5>
                        <a href="https://api.whatsapp.com/send?phone=8840432962" target="_blank">Send A Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your full name" required/>
                    <input type="email" name="email" placeholder="your full email"required/>
                    <textarea name="message" rows="7" placeholder="your message for me" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>






            </div>
        </section>
    )
}
export default Contact