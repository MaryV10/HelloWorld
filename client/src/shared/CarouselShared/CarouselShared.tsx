import React, { useRef } from 'react';
import { Carousel } from 'antd';
import styles from './Carousel.module.css';


import left from "@/assets/free-icon-rewind-left-gpng.png"
import right from "@/assets/free-icon-rewind-right-g.png"

const CarouselShared: React.FC<{ children: React.ReactNode[]; autoplaySpeed?: number }> = ({ children}) => {
  const carouselRef = useRef<any>(null);


  const groupedChildren = React.Children.toArray(children).reduce<React.ReactNode[][]>(
    (acc, child, index) => {
      if (index % 3 === 0) acc.push([]);
      acc[acc.length - 1].push(child);
      return acc;
    },
    []
  );



  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <div className={styles.carouselContainer}>

      <Carousel ref={carouselRef} draggable>
        {groupedChildren.map((group, index) => (
          <div className={styles.carouselSlide} key={index}>
            {group.map((child, subIndex) => (
              <div className={styles.carouselItem} key={subIndex}>
                {child}
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    
<div>
      <img style={{height: "40px", width: "40px",  marginLeft: '10px'}} src={left} onClick={prevSlide} alt="" />
<img style={{height: "40px", width: "40px",  marginLeft: '10px'}} src={right} onClick={nextSlide} alt="" />
</div>
    </div>
  );
};

export default CarouselShared;
