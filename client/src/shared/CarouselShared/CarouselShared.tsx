import React from 'react';
import { Carousel } from 'antd';
import styles from './Carousel.module.css';

const CarouselShared: React.FC<{ children: React.ReactNode[]; autoplaySpeed?: number }> = ({ children, autoplaySpeed = 4000 }) => {
  const groupedChildren = React.Children.toArray(children).reduce<React.ReactNode[][]>(
    (acc, child, index) => {
      if (index % 3 === 0) acc.push([]);
      acc[acc.length - 1].push(child);
      return acc;
    },
    []
  );

  return (
    <div className={styles.carouselContainer}>
      <Carousel draggable >
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
    </div>
  );
};

export default CarouselShared;
