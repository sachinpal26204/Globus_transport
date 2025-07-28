// ImageSlider.js
import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";

const images = [
  "/Image/Mixture_image2.jpg",
  "/Image/pic1.jpg",
  "/Image/slider3.jpg",
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1000, // 1 second
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box sx={{ maxWidth: "100%", height: "400px", overflow: "hidden" }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
