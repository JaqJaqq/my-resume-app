import React from "react";
import './Testimonials.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { themeContext } from "../../Context";
import { useContext } from "react";


const Testimonial = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const slidesPerViewValue = window.innerWidth <= 480 ? 1 : 3;

    return (
        <div className="t-wrapper" id="Testimonials">
            <div className="t-heading">
                <span style={{color: darkMode? 'white': ''}}>After months of training, </span>
                <span>I finally earned my certificate</span>
            </div>
            {/* slider */}
            <Swiper
                spaceBetween={20}
                slidesPerView={slidesPerViewValue}
                grabCursor={true}
                className="testimonial-slider"
            >
                <SwiperSlide>
                    <img src="/icon/full-stack_certificate.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/certificate_sql.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/certificate_power-bi.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/certificate_eda-excel.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/icon/certificate_dashboard-design.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
};

export default Testimonial