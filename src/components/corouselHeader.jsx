import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const corouselImage = [
    'corousel/banner1.jpg',
    'corousel/banner2.jpg',
    'corousel/banner3.jpeg',
  ];

import jsonData from "@/config/jsonData.json";

  
  function CorouselHeader() {
    return (
      <Carousel>
        {corouselImage.map((imgPath, index) => (
          <Paper key={index}>
            <img src={imgPath} alt={`Image ${index}`} style={{ width: '100%' }} />
          </Paper>
        ))}
      </Carousel>
    );
  }


export default CorouselHeader