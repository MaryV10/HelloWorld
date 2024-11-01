import React from 'react';
import { Carousel } from 'antd';
import styles from "./CarouselMainPage2.module.css";

import background2 from "@/assets/photo_2024-10-29_19-01-36.jpg";
import background3 from "@/assets/photo_2024-10-29_19-01-42.jpg";
import background4 from "@/assets/photo_2024-10-29_19-06-04.jpg";
import background5 from "@/assets/photo_2024-10-29_19-06-13.jpg";
import background6 from "@/assets/photo_2024-10-29_19-08-06.jpg";

const CarouselMainPage2: React.FC = () => {
  return (
    <div className={styles.container}>
      <Carousel arrows autoplay className={styles.roundedCarousel} draggable infinite>
        <div className={styles.divContainer}>
          <img className={styles.image} src={background2}/>
          <p className= {styles.title} style={{  textAlign: "center" }}>Наша галерея:</p>
        </div>
        <div className={styles.divContainer}>
        <img className={styles.image} src={background3}/>
        <p className= {styles.title} style={{  textAlign: "center" }}>Наша галерея:</p>
        </div>
        <div className={styles.divContainer}>
        <img className={styles.image} src={background4}/>
        <p className= {styles.title} style={{  textAlign: "center" }}>Наша галерея:</p>
        </div>
        <div className={styles.divContainer}>
        <img className={styles.image} src={background5}/>
        <p className= {styles.title} style={{  textAlign: "center" }}>Наша галерея:</p>
        </div>
        <div className={styles.divContainer}>
        <img className={styles.image} src={background6}/>
        <p className= {styles.title} style={{  textAlign: "center" }}>Наша галерея:</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselMainPage2;
