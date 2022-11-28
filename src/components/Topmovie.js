import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TopMovieData from "../data/TopMovies";



import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

function Topmovie() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="home"
      >
        {
          TopMovieData.map((elem) => {
            return (
              <SwiperSlide className="container">
          <img src={elem.img} alt="" />
          <div className="home-text">
            <span> {elem.heading} </span>
            <h1>
              {elem.subone}
              <br /> {elem.subtwo}
            </h1>
            <a href="#" className="btn">
              {elem.linkbook}
            </a>
            <Link
            className="play"
            to={`video/:${elem.MovieID}`}
            >
              <i className="bx bx-play"></i>
            </Link>
          </div>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}

export default Topmovie;
