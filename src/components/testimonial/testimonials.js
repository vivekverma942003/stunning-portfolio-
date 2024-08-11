import React from "react";
import "./testimonials.css";
import pic1 from "../../assets/C5.jpg";
import pic2 from "../../assets/C6.jpg";
import pic3 from "../../assets/C4.jpg";
import pic4 from "../../assets/C1.jpg";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles

import 'swiper/css/pagination'

const Ghar = [
  {
    id: 1,
    image: pic1,
    client__name: "vivek kumar verma",
    paragraph:
      "Free forever Free hosting is valid for the entire lifetime of your domain. Unlimited availability Your website is online and available for visitors 24 hours a day. Premium servers Exclusive hosting platform built to provide maximum performance. view package Multi-site hosting Host and manage multiple websites under single cPanel® account.",
  },
  {
    id: 2,
    image: pic2,
    client__name: "ayudh kumar",
    paragraph:
      "Free forever Free hosting is valid for the entire lifetime of your domain. Unlimited availability Your website is online and available for visitors 24 hours a day. Premium servers Exclusive hosting platform built to provide maximum performance. view package Multi-site hosting Host and manage multiple websites under single cPanel® account.",
  },
  {
    id: 3,
    image: pic3,
    client__name: "vishal kumar verma",
    paragraph:
      "Free forever Free hosting is valid for the entire lifetime of your domain. Unlimited availability Your website is online and available for visitors 24 hours a day. Premium servers Exclusive hosting platform built to provide maximum performance. view package Multi-site hosting Host and manage multiple websites under single cPanel® account.",
  },
  {
    id: 4,
    image: pic4,
    client__name: "atul kumar yadav",
    paragraph:
      "Free forever Free hosting is valid for the entire lifetime of your domain. Unlimited availability Your website is online and available for visitors 24 hours a day. Premium servers Exclusive hosting platform built to provide maximum performance. view package Multi-site hosting Host and manage multiple websites under single cPanel® account.",
  },
];
function Testimonial() {
  return (
    <section id="testimonial">
      <h5>Review From Clients</h5>
      <h2>Testimonial</h2>
      <Swiper className="container testimonials__container" modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

        {Ghar.map(({ id, image, client__name, paragraph }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt={client__name} />
              </div>
              <h5 className="cleint__name">{client__name}</h5>
              <small className="client__review">{paragraph}</small>
            </SwiperSlide>
          );
        })
        }
      </Swiper>
    </section>
  );
}
export default Testimonial;
