import React from "react";
import './Portfolio.css';
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { themeContext } from "../../Context";
import { useContext } from "react";

// import required modules
import { Pagination } from 'swiper/modules';
import Ws1 from "../../img/ws-landing-page.jpg";
import Ws2 from "../../img/ws-menu.jpg";
import Ws3 from "../../img/ws-subscription.jpg";
import Ta from "../../img/tourist-attraction.jpg"
import Hs1 from "../../img/hs-landing-page.jpg"
import Hs2 from "../../img/hs-services.jpg"
import Hs3 from "../../img/hs-checkout-form.jpg"
import Hs4 from "../../img/hs-checkout-form2.jpg"
import Hs5 from "../../img/hs-admin.jpg"
import Hs6 from "../../img/Register.jpg"
import Hs7 from "../../img/Login.jpg"

const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="p-wrapper" id="Portfolio">
            {/* heading */}
            <div className="p-heading">
            <p style={{color: darkMode? 'white': ''}}>Recent Projects</p>
            <p style={{color: darkMode? 'wheat': ''}}>Portfolio</p>
            </div>

            {/* slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className="custom-swiper"
            >
                <SwiperSlide>
                    <img src={Hs1} alt="" />
                    <br />
                    <span className="description">Project Home Service: Landing Page</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Hs2} alt="" />
                    <br />
                    <span className="description">Project Home Service: Services Page</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Hs3} alt="" />
                    <br />
                    <span className="description">Project Home Service: Checkout Form</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Hs4} alt="" />
                    <br />
                    <span className="description">Project Home Service: Checkout Form</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Hs5} alt="" />
                    <br />
                    <span className="description">Project Home Service: Admin Dashboard</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ws1} alt="" />
                    <br />
                    <span className="description">Project Django: Landing Page</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ws2} alt="" />
                    <br />
                    <span className="description">Project Django: Menu Page</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ws3} alt="" />
                    <br />
                    <span className="description">Project Django: Subscription Page</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ta} alt="" />
                    <br />
                    <span className="description">Project Tourist Attraction</span>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio