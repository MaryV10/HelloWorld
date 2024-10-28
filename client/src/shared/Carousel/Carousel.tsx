import React from 'react';
import { Carousel } from 'antd';
import styles from "./Carousel.module.css";


 const CarouselShared: React.FC<{ children?: React.ReactNode }> = ({children}) => {
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
    {React.Children.map(children, (child) => (
          <div style={contentStyle}>{child}</div>
        ))}
    
    </Carousel>
    </div>
  );
};
export default CarouselShared