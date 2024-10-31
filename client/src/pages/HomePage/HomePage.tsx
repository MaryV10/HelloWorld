import React, { Suspense } from "react";
import background from "@/assets/05.jpg";
import styles from "./HomePage.module.css";
import image1 from "@/assets/common.jpg";

import {isMobile} from 'react-device-detect';

import Example from "@/shared/CarouselMain/CarouselMain";
import Loader from "@/shared/Loader/Loader";
const LazyTaskForm = React.lazy(() => import('@/shared/CarouselMainPage/CarouselMainPage'));
const LazyCarouselComponent = React.lazy(() => import('@/shared/Carousel/Carousel'));
export const HomePage: React.FC = () => {


  
  const renderContent = () => {
    if (isMobile) {

      return <Suspense fallback={<Loader />}>
   <div style={{marginTop: "5vh"}}><LazyTaskForm /></div>
    </Suspense>  ;
    }
    return <div><Example /></div>;
  };
 
  return (

    
    <>
      <img className={styles.heroImage} src={background} alt="" />

      <div className={styles.mission}>
        <div>
          <h1 style={{ color: "black", fontSize: "30px", textAlign: "left" }}>Наша миссия</h1>
          <p style={{ color: "black", textAlign: "left" }}>
            Мы стремимся создать уникальную платформу, где каждый может
            открывать и делиться интересными местами на карте. Наша цель —
            вдохновить людей исследовать окружающий мир, находить новые уголки
            для отдыха и приключений, а также объединять сообщество любителей
            путешествий и открытий. Мы верим, что каждый может стать
            исследователем, и вместе мы можем создать карту интересов, полную
            увлекательных находок и незабываемых впечатлений.
          </p>
        </div>

      
        <Suspense fallback={<Loader />}>
          <div className={styles.carouselFadeIn}>
          <img className={styles.image1} src={image1} alt="" />
          </div>
          </Suspense>
      </div>
      <div className={styles.exampleWrapper}>
        {renderContent()}
      </div>
      
      <div className={styles.greenLine}>Enjoy the world with us!</div>
    </>
  );
};
