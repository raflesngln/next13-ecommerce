/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "@mui/material/Grid";

import jsonData from "@/config/jsonData.json";
import productDetail from "@/config/productDetail.json";
import { Typography } from "@mui/material";

const ProductDetails = ({ params }:any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState({ idx: 0, img: "" });

  let title=params.slug[1].replace(/%20/g, ' ');

  const settings = {
    className: "corousel_itemsImg_click_change",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false, // Hide the prev button
    nextArrow: false, // Hide the next button
    beforeChange: (oldIndex:any, newIndex:any) => {
      setActiveIndex(newIndex);
    }
  };

  const handleThumbnailClick = async (index:any) => {
    setActiveIndex(index);
    // const goto = await sliderRef.slickGoTo(index);
    // return goto;
  };

  let sliderRef;

  return (
    <>
      <h2>Produk</h2>
      {/* <Slider
        {...settings}
        ref={(slider) => (sliderRef = slider)}
        style={{ maxWidth: "500px" }}
      >
        {jsonData.map((val, idx) => (
          <div key={idx}>
            <img
              src={val.imgPath}
              alt={`Image ${idx + 1}`}
              style={{ width: 300, height: 300 }}
            />
          </div>
        ))}
      </Slider> */}

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        style={{
          overflowY: "auto",
          overflowX: "hidden",
          height: "440px",
          overflow: "auto"
        }}
      >
        <Grid xs={12} sm={12} md={5} xl={5}>
          {productDetail.itemsImg ? (
            <img
              src={productDetail.itemsImg[activeIndex]}
              style={{ width: 350, height: 350 }}
            />
          ) : (
            <img
              src={productDetail.itemsImg[activeIndex]}
              style={{ width: 350, height: 350 }}
            />
          )}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                marginTop: "10px"
              }}
            >
              {productDetail.itemsImg.map((image, idx) => (
                <div
                  key={idx}
                  onClick={() => handleThumbnailClick(idx)}
                  onMouseEnter={() => handleThumbnailClick(idx)}
                  style={{
                    width: "60px",
                    height: "60px",
                    // border: "1px solid #ccc",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    // border: idx === activeIndex ? "2px red solid" : "transparent",
                    borderRadius: "8px"
                  }}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${idx + 1}`}
                    style={{
                      width: 55,
                      height: 55,
                      border:
                        idx === activeIndex
                          ? "2px #ff9800 solid"
                          : "transparent",
                      borderRadius: "8px"
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </Grid>

        <Grid xs={12} sm={12} md={7} xl={7}>
          <Typography variant="h4">{title}</Typography>
          <h5 style={{ overflowWrap: "break-word" }}>{productDetail.desc}</h5>
          <h3>{productDetail.price}</h3>
        </Grid>
      </Grid>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <h3>{JSON.stringify(productDetail.itemsImg[activeIndex])}</h3>
      </div>
    </>
  );
};

export default ProductDetails;