import React from 'react';
import { Carousel } from 'antd';
import styles from './CarouselPhotosMobile.module.css';

const CarouselPhotosMobile: React.FC<{ children: React.ReactNode[] }> = ( {children}) => {


  return (
    <div className={styles.carouselContainer}>
      <Carousel arrows draggable infinite>
      {children}
      </Carousel>
    </div>
  );
};

export default CarouselPhotosMobile;
