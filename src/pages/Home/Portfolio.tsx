// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";

const kasumiWorkflow = [
  "/assets/image/portfolio/workflow-1.png",
  "/assets/image/portfolio/workflow-2.png",
];
const sekilasAJaWeb = [
  "/assets/image/portfolio/web-sekilasaja-1.png",
  "/assets/image/portfolio/web-sekilasaja-2.png",
];
const sekilasAJaApp = [
  "/assets/image/portfolio/mobile-sekilasaja-1.png",
  "/assets/image/portfolio/mobile-sekilasaja-2.png",
  "/assets/image/portfolio/mobile-sekilasaja-3.png",
  "/assets/image/portfolio/mobile-sekilasaja-4.png",
];
const excApp = [
  "/assets/image/portfolio/excapk-1.png",
  "/assets/image/portfolio/excapk-2.png",
  "/assets/image/portfolio/excapk-3.png",
  "/assets/image/portfolio/excapk-4.png",
];
const parliamo = [
  "/assets/image/portfolio/parliamo-1.png",
  "/assets/image/portfolio/parliamo-2.png",
  "/assets/image/portfolio/parliamo-3.png",
  "/assets/image/portfolio/parliamo-4.png",
];
const friday = [
  "/assets/image/portfolio/friday-1.png",
  "/assets/image/portfolio/friday-2.png",
  "/assets/image/portfolio/friday-3.png",
  "/assets/image/portfolio/friday-4.png",
];
const farmOrder = [
  "/assets/image/portfolio/snack-order-1.png",
  "/assets/image/portfolio/snack-order-2.png",
  "/assets/image/portfolio/snack-order-3.png",
  "/assets/image/portfolio/snack-order-4.png",
];
const instaSubsViews = [
  "/assets/image/portfolio/subsApp-1.png",
  "/assets/image/portfolio/subsApp-2.png",
  "/assets/image/portfolio/subsApp-3.png",
  "/assets/image/portfolio/subsApp-4.png",
];

const titleProject = [
  { title: "Kasumi Workflow", image: kasumiWorkflow, link: "" },
  {
    title: "SekilasAja Web",
    image: sekilasAJaWeb,
    link: "https://sekilasaja.com/",
  },
  {
    title: "SekilasAja App",
    image: sekilasAJaApp,
    link: "https://play.google.com/store/apps/details?id=com.sekilasaja&pcampaignid=web_share",
  },
  { title: "ExcApp", image: excApp, link: "/apps/ExcApp.apk" },
  { title: "Parliamo", image: parliamo, link: "/apps/parliamo.apk" },
  {
    title: "Friday Social App",
    image: friday,
    link: "https://play.google.com/store/apps/details?id=com.cube_social_media&pcampaignid=web_share",
  },
  { title: "Farm Order", image: farmOrder, link: "" },
  {
    title: "Insta Subs Views",
    image: instaSubsViews,
    link: "/apps/insta-subs-views.apk",
  },
];

export default () => {
  const [active, setActive] = useState(0);
  const [images, setImages] = useState(titleProject[0].image);
  const [link, setLink] = useState(titleProject[active].link);

  return (
    <>
      <Box
        sx={{
          height: 20,
        }}
      />
      <Grid container gap={1} justifyContent={"center"}>
        {titleProject.map((data, index) => {
          return (
            <Grid item lg={2} xs={3} textAlign={"center"}>
              <Box
                sx={{
                  height: 40,
                }}
              >
                <Typography
                  onClick={() => {
                    setActive(index);
                    setImages(data.image);
                    setLink(data.link);
                  }}
                  sx={{
                    fontFamily: "sans-serif",
                    ":hover": {
                      fontSize: 20,
                      textShadow: "0px 0px 5px #FF0000",
                    },
                    fontSize: index === active ? 20 : 15,
                    transition: "0.5s",
                    textDecoration: "underline",
                    fontWeight: "700",
                    textShadow:
                      index === active
                        ? "0px 0px 5px #FF0000"
                        : "0px 0px 0px #FF0000",
                    cursor: "pointer",
                  }}
                >
                  {data.title}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Box
        sx={{
          height: 20,
        }}
      />

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={false}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => console.log("slide change", swiper)}
      >
        {images.map((data) => {
          return (
            <SwiperSlide
              key={data}
              style={{
                textAlign: "center",
              }}
            >
              <img
                style={{
                  height: 300,
                }}
                src={data}
                alt={data}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Box
        sx={{
          height: 20,
        }}
      />
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          onClick={() => {
            if (!link) {
              return;
            }
            window.open(link);
          }}
          variant="caption"
          sx={{
            fontSize: 20,
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          {titleProject[active].title}
        </Typography>
      </Box>
    </>
  );
};
