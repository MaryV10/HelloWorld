import React from 'react';
import { Carousel } from 'antd';
import styles from "./Carousel.module.css";
import image1 from "@/assets/landscape-hills-covered-grass-flowers-cloudy-sky-sunlight.jpg";
import video2 from "@/assets/6026167_Person_People_3840x2160 (1).mp4"

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
      <div >
        <video style={contentStyle} className={styles.container} autoPlay loop muted src={video2}></video>
      </div>
    
    </Carousel>
    </div>
  );
};
export default CarouselComponent