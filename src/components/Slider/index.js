import React from "react";
import {  CssBaseline ,useMediaQuery} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { styled } from "@mui/system";




const DivStyle = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
});

export default function Slider() {

  const isMobile = useMediaQuery("(max-width: 600px)");


const slidesPerView = isMobile ? 1 : 3;
  return (
    <>
      <CssBaseline />
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={150}
        freeMode={true}
        navigation
        centeredSlides
        centeredSlidesBounds
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper1"
      >
        <SwiperSlide>
          <DivStyle>
            <Image
              src="/assets/img/placeholder.svg"
              alt="icon3"
              width={450}
              height={400}
              style={{
                marginBottom: 50,
                marginTop:20
              }}
            />
          </DivStyle>
        </SwiperSlide>
        <SwiperSlide>
          <DivStyle>
            <Image
              src="/assets/img/placeholder.svg"
              alt="icon3"
              width={450}
              height={400}
              style={{
                marginBottom: 50,
                marginTop:20
              }}
            />
          </DivStyle>
        </SwiperSlide>
        <SwiperSlide>
          <DivStyle>
            <Image
              src="/assets/img/placeholder.svg"
              alt="icon3"
              width={450}
              height={400}
              style={{
                marginBottom: 50,
                marginTop:20
              }}
            />
          </DivStyle>
        </SwiperSlide>
        <SwiperSlide>
          <DivStyle>
            <Image
              src="/assets/img/placeholder.svg"
              alt="icon3"
              width={450}
              height={400}
              style={{
                marginBottom: 50,
                marginTop:20
              }}
            />
          </DivStyle>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
