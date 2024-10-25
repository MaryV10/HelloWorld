import React from 'react';
import { Carousel } from 'antd';
import styles from "./CarouselMainPage.module.css";


export const CarouselMainPage: React.FC = () => {
  

  return (
    <div style={{width: "300px" , margin: "20px"}}>
    <Carousel arrows autoplay className={styles.roundedCarousel} draggable  infinite>
    <div className={styles.divContainer}>
     Content 1
      </div>
      <div className={styles.divContainer}>
     Content 2
      </div>
      <div className={styles.divContainer}>
     Content 2
      </div>
      <div className={styles.divContainer}>
     Content 2
      </div>
      <div className={styles.divContainer}>
     Content 2
      </div>
    
    </Carousel>
    </div>
  );
};
