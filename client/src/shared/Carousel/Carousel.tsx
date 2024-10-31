import React from 'react';
import { Carousel } from 'antd';
import styles from "./Carousel.module.css";
import image1 from "@/assets/common.jpg"
import image2 from "@/assets/comonphoto2.jpg"

 const CarouselComponent: React.FC = () => {
    const contentStyle: React.CSSProperties = {
        margin: 0,
        width: '100%',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    
      };

  return (
    <div className={styles.desctop}>
    <Carousel arrows autoplay className={styles.roundedCarousel} draggable  infinite>
      <div>
        <img style={contentStyle} className={styles.container} src={image1} alt="" />
      </div>
      <div>
        <img style={contentStyle} className={styles.container} src={image2} alt="" />
      </div>
    
    </Carousel>
    </div>
  );
};
export default CarouselComponent