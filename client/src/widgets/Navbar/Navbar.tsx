import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { ROUTES } from '@/app/router/routes';
import logo from "../../../public/logo.png"


export const Navbar: React.FC = () => {

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(`.${styles.container}`);
      if (navbar) {
        navbar.classList.toggle(styles.scrolled, window.scrollY > 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <img style={{width: "150px"}} src={logo} alt="" />
<div className={styles.bar}>
<Link to={ROUTES.FILMS}>
      <button className={styles.navButton}>
  Карта
      </button>
      </Link>

     
        <>
        <Link to={ROUTES.SIGNIN}>
          <button className={styles.navButton}>
            Вход
          </button>
          </Link>

          <Link to={ROUTES.SIGNUP}>
          <button className={styles.navButton}>
            Регистрация
          </button>
          </Link>
        </>
        </div>
      
    </div>
  );
};

export default Navbar;
