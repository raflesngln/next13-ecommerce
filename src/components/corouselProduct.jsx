/* eslint-disable react/jsx-key */
import React from "react";
// import { makeStyles, useTheme } from "@material-ui/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import MediaCard from "./MediaCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import jsonData from "@/config/jsonData.json";

// const useStyles = makeStyles({
//   root: {
//     margin: "10px 10px",
//     display: "flex",
//     flexDirection: "column"
//   },
//   header: {
//     flexGrow: 1
//   },
//   media: {
//     height: 200
//   },
//   paper: {
//     width: 300
//   },
//   image: {
//     width: "100%"
//   },
//   typo: {
//     textAlign: "center"
//   },
//   mx: {
//     margin: "6px 0px"
//   },
//   card: {
//     width: 300
//   }
// });

const MultipleItems = () => {
  const settings = {
    className: "corousel_product_horizontal",
    dots: true,
    infinite: true,
    initialSlide: 0,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
      </Grid>

      <Slider {...settings}>
        {jsonData.map((val, i) => {
          return (
            <>
              <MediaCard
                key={i}
                title={val.label}
                image={val.imgPath}
                imgH={150}
                imgW={150}
                height={200}
              />
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default MultipleItems;
