import React from 'react';
import background from "../../../public/0061.jpg";
import styles from './HomePage.module.css';
import { CarouselComponent } from '@/shared/Carousel';
import Example from '@/shared/CarouselMain/CarouselMain';



export const HomePage: React.FC = () => {
  
  
  return (
    <>
    
      <  img className={styles.heroImage} src={background} alt="" />
  
     
     <div className={styles.mission}>
     
      
      <div >
      <h1 style={{color: "black", fontSize: "30px"}}>Наша миссия</h1> 
      <p style={{color: "black"}}>
      Мы стремимся создать уникальную платформу, где каждый может открывать и делиться интересными местами на карте. Наша цель — вдохновить людей исследовать окружающий мир, находить новые уголки для отдыха и приключений, а также объединять сообщество любителей путешествий и открытий. Мы верим, что каждый может стать исследователем, и вместе мы можем создать карту интересов, полную увлекательных находок и незабываемых впечатлений.</p>
      </div>
     <CarouselComponent />
     </div>
     <div >
     <Example />
    </div>
     <div className={styles.greenLine} >Enjoy the world with us!</div>
  
  </>

  )
};
