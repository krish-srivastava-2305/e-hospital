import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={
              "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={
              "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={
              "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={800}
            height={800}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1661270501104-596643cec818?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={
              "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={500}
            height={500}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
