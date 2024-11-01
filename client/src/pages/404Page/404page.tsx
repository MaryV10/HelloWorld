import React from 'react';
import styles from './404page.module.css';
import planetImage from '../../assets/globe-earth.png'

export const NotFoundPage: React.FC = () => {
  return (
    <>
    <div className={styles.back}>
      <div className={styles.planet}>
        <img src={planetImage} alt="Planet" className={styles.planetImage} />
        <div className={styles.inner}>
          <div className={styles.surface}></div>
        </div>
        
        <div className={styles.moon}></div>
        <span className={styles.number}>4</span>
        <span className={styles.number}>4</span>
        <div className={`${styles.stars} ${styles.s1}`}></div>
        <div className={`${styles.stars} ${styles.s2}`}></div>
        <div className={`${styles.stars} ${styles.s3}`}></div>
        <div className={`${styles.stars} ${styles.s4}`}></div>
      </div>
      <p className={styles.alt}>404</p>
      <p className={styles.info}>Тебе земли мало?</p>
      </div>
    </>
  );
};
