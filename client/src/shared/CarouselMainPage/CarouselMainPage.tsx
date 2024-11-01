import React from 'react';
import { Carousel } from 'antd';
import styles from "./CarouselMainPage.module.css";

import background2 from "@/assets/photo_2024-10-29_19-01-36.jpg";
import background3 from "@/assets/photo_2024-10-29_19-01-42.jpg";
import background4 from "@/assets/photo_2024-10-29_19-06-04.jpg";
import background5 from "@/assets/photo_2024-10-29_19-06-13.jpg";
import background6 from "@/assets/photo_2024-10-29_19-08-06.jpg";

const CarouselMainPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Carousel arrows autoplay className={styles.roundedCarousel} draggable infinite>
        <div className={styles.divContainer}>
          <img className={styles.image} src={background2}/>
        </div>
        <div className={styles.divContainer}>
        <img className={styles.image} src={background3}/>
        </div>
        <div className={styles.divContainer}>
        <img className={styles.image} src={background4}/>
        </div>
        <div className={styles.divContainer}>
        <img className={styles.image} src={background5}/>
        </div>
        <div className={styles.divContainer}>
        <img className={styles.image} src={background6}/>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselMainPage;
