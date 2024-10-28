import React from 'react';
import { Carousel } from 'antd';
import styles from './CarouselSharedMobile.module.css';

const CarouselSharedMobile: React.FC<{ children: React.ReactNode[]; autoplaySpeed?: number }> = ( {children}) => {


  return (
    <div className={styles.carouselContainer}>
      <Carousel arrows draggable infinite>
      {children.map((item) => (
        <div className={styles.carouselItem}>{item}</div>
      ))}
      </Carousel>
    </div>
  );
};

export default CarouselSharedMobile;
