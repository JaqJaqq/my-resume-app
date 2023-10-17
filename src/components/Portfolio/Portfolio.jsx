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
            spaceBetween={20}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src="/icon/ws-landing-page.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/ws-menu.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/ws-subscription.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/tourist-attraction.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/hs-landing-page.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/hs-services.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/hs-admin.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/hs-checkout-form.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/hs-checkout-form2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/Register.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/Login.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio