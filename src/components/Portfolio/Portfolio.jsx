import React from "react";
import './Portfolio.css';
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import { themeContext } from "../../Context";
import { useContext } from "react";


const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id="Portfolio">
            {/* heading */}
            <span style={{color: darkMode? 'white': ''}}>Recent ProJects</span>
            <span style={{color: darkMode? 'wheat': ''}}>Portfolio</span>

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