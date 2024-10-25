import React from "react";
import background from "../../../public/0061.jpg";
import styles from "./HomePage.module.css";

import { CarouselComponent } from "@/shared/Carousel";
import {isMobile} from 'react-device-detect';
import { CarouselMainPage } from "@/shared/CarouselMainPage/CarouselMainPage";
import Example from "@/shared/CarouselMain/CarouselMain";

export const HomePage: React.FC = () => {

  const renderContent = () => {
    if (isMobile) {
      return <div><CarouselMainPage /></div>;
    }
    return <div><Example /></div>;
  };
 
  return (
    <>
      <img className={styles.heroImage} src={background} alt="" />

      <div className={styles.mission}>
        <div>
          <h1 style={{ color: "black", fontSize: "30px" }}>Наша миссия</h1>
          <p style={{ color: "black" }}>
            Мы стремимся создать уникальную платформу, где каждый может
            открывать и делиться интересными местами на карте. Наша цель —
            вдохновить людей исследовать окружающий мир, находить новые уголки
            для отдыха и приключений, а также объединять сообщество любителей
            путешествий и открытий. Мы верим, что каждый может стать
            исследователем, и вместе мы можем создать карту интересов, полную
            увлекательных находок и незабываемых впечатлений.
          </p>
        </div>

      

          <div className={styles.carouselFadeIn}>
            <CarouselComponent />
          </div>
        
      
   
      </div>
      <div className={styles.exampleWrapper}>
        {renderContent()}
      </div>
      
      <div className={styles.greenLine}>Enjoy the world with us!</div>
    </>
  );
};
