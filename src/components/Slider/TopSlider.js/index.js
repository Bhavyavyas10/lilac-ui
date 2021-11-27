import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Autoplay, Pagination, EffectCoverflow]);

const TopBanner = () => {
  return (
    <Swiper
      effect="coverflow"
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      coverflowEffect={{
        rotate: 20,
        stretch: 25,
        depth: 250,
        modifier: 1,
        slideShadows: false,
      }}
    >
      <SwiperSlide>
        <div style={styles.banner_one}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={styles.banner_two}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={styles.banner_three}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={styles.banner_four}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={styles.banner_five}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={styles.banner_six}></div>
      </SwiperSlide>
    </Swiper>
  );
};

const styles = {
  banner_one: {
    display: "flex",
    height: "300px",
    width: "700px",
    borderRadius: "5px",
    backgroundColor: "#234f1E",
  },
  banner_two: {
    display: "flex",
    height: "300px",
    width: "700px",
    borderRadius: "5px",
    backgroundColor: "#607d3b",
  },
  banner_three: {
    display: "flex",
    height: "300px",
    width: "700px",
    borderRadius: "5px",
    backgroundColor: "#5dbb63",
  },
  banner_four: {
    display: "flex",
    height: "300px",
    width: "700px",
    borderRadius: "5px",
    backgroundColor: "#3a5311",
  },
  banner_five: {
    display: "flex",
    height: "300px",
    width: "700px",
    borderRadius: "5px",
    backgroundColor: "#03ac13",
  },
  banner_six: {
    display: "flex",
    height: "300px",
    width: "700px",
    borderRadius: "5px",
    backgroundColor: "#b2d3c2",
  },
};

export default TopBanner;
