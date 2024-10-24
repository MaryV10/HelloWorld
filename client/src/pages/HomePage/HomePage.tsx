import React from 'react';
import background from "../../../public/0061.jpg";
import styles from './HomePage.module.css';


export const HomePage: React.FC = () => {
  return (
    <>
     <div className={styles.heroImage} style={{ backgroundImage: `url(${background})` }}></div>
   
  <h1>Home Page</h1>
  </>

  )
};
