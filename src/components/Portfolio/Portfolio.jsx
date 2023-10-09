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
                    <img src="/icon/Register.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/Login.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/Service1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/Service2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/Payment.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/Payment2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/Header.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio