import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import comingSoonData from "../data/comingSoonData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

function ComingSoonMovies() {
  return (
    <section className="coming" id="coming">
      <h2 className="heading">Coming Soon</h2>
      {/* <!-- Coming container --> */}
      <Swiper
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="coming-contianer"
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          568: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          968: {
            slidesPerView: 5,
          },
        }}
      >
        {
          comingSoonData.map(elem => {
            return (
              <SwiperSlide className="box">
          <div className="box-img">
            <img src={elem.src} alt="" />
          </div>
          <h3>{elem.name}</h3>
          <span>{elem.time} | {elem.Genre}</span>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
}

export default ComingSoonMovies;
