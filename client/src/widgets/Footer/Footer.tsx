import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <p>© Hello World</p>
    </footer>
  );
};
