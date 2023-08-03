import React from "react";
import './Portfolio.css';
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';

const Portfolio = () => {
    return (
        <div className="portfolio">
            {/* heading */}
            <span>Recent ProJects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src="/icon/Header.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/Services.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/takehand.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/pricing.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/Testimonial.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/Newsletter.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/Footer.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio