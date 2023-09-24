import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const corouselImage: string[] = [
  'corousel/banner1.jpg',
  'corousel/banner2.jpg',
  'corousel/banner3.jpeg',
];

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

export default CorouselHeader;
