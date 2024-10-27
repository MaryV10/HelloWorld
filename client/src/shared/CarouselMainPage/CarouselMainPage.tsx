import React from 'react';
import { Carousel } from 'antd';
import styles from "./CarouselMainPage.module.css";

const CarouselMainPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Carousel arrows autoplay className={styles.roundedCarousel} draggable infinite>
        <div className={styles.divContainer}>
          Content 1
        </div>
        <div className={styles.divContainer}>
          Content 2
        </div>
        <div className={styles.divContainer}>
          Content 3
        </div>
        <div className={styles.divContainer}>
          Content 4
        </div>
        <div className={styles.divContainer}>
          Content 5
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselMainPage;
