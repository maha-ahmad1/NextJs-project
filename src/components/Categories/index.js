import React from "react";
import {
  Container,
  CssBaseline,
  Typography,
  Grid,
  Box,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { Avatar } from "@mui/material";

export default function Categories() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const spacing = isMobile ? 2 : 120;

  const slidesPerView = isMobile ? 2 : 4;

  return (
    <Container style={{ marginTop: "60px" }}>
      <CssBaseline />
      <Grid container spacing={spacing}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            align="right"
            style={{ marginBottom: "30px" }}
          >
            Categories
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            alignItems="center"
            style={{ marginBottom: "30px" }}
          >
            <Typography variant="h6" align="left" style={{ color: "#554AF0" }}>
              See all
            </Typography>
            <div style={{ marginLeft: "10px" }}>
              <Image
                src="/assets/img/Vector.svg"
                alt="Ahmed's Picture"
                width={20}
                height={10}
              />
            </div>
          </Box>
        </Grid>
      </Grid>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        freeMode={true}
        navigation
        minimumVelocity={0.02}
        momentum={true}
        momentumBounce={true}
        momentumBounceRatio={1}
        momentumRatio={1}
        momentumVelocityRatio={1}
        sticky={false}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Avatar
            src="/assets/img/topcategories.svg"
            alt="icon3"
            style={{
              width: "100%",
              height: "auto",
              marginTop: 40,
              marginBottom: 70,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar
            src="/assets/img/topcategories1.svg"
            alt="icon3"
            style={{
              width: "100%",
              height: "auto",
              marginTop: 40,
              marginBottom: 70,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar
            src="/assets/img/topcategories2.svg"
            alt="icon3"
            style={{
              width: "100%",
              height: "auto",
              marginTop: 40,
              marginBottom: 70,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar
            src="/assets/img/topcategories.svg"
            alt="icon3"
            style={{
              width: "100%",
              height: "auto",
              marginTop: 40,
              marginBottom: 70,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar
            src="/assets/img/topcategories1.svg"
            alt="icon3"
            style={{
              width: "100%",
              height: "auto",
              marginTop: 40,
              marginBottom: 70,
            }}
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
