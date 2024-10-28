import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import {isMobile} from 'react-device-detect';
import { ROUTES } from "@/app/router/routes";
import Avatar from '@mui/material/Avatar';
import logo from "@/assets/logo.png";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { logout } from "@/entities/user";

import MobileMenu from "../MobileNavbar/MobileNavbar";

import Modal from "@/shared/ui/Modal/Modal";
import { SignUpForm } from "@/features/auth/ui/SignUpForm";
import { SignInForm } from "@/features/auth/ui/SignInForm";





export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(`.${styles.container}`);
      if (navbar) {
        navbar.classList.toggle(styles.scrolled, window.scrollY > 40);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };
  // REGISTRATIOn INTO MODAL =============================
  const onToggle = (): void => {
    setActive((prev) => !prev);
  };
  const onToggle1 = (): void => {
    setActive1((prev) => !prev);
  };

  const renderContent = () => {
    if (isMobile) {
      return <div><MobileMenu /></div>;
    }
    return <div><div className={styles.bar}>
    {user && <Avatar alt={`${user.nickname}`} src={user.avatarUrl} style={{border: "3px solid #017247"}}/>}
    <Link to={ROUTES.MAP}>
      <button className={styles.navButton}>Карта</button>
    </Link>
    {user ? (
      <>
        <button className={styles.navButton} onClick={handleLogout}>
          Logout
        </button>
        <Link to={ROUTES.PROFILE}> <button className={styles.navButton} >
            Личный кабинет
        </button>
        </Link>
      </>
    ) : (
      <>
        
          
          <button onClick={onToggle1} className={styles.navButton}>Вход</button>
       
        
          <button onClick={onToggle} className={styles.navButton}>Регистрация</button>
        
      </>
    )}
  </div></div>;
  };

  return (
    <div className={styles.container}>
      <Link to={ROUTES.HOME}>
        <img style={{ width: "150px" ,marginTop: "10px"}} src={logo} alt="" />
      </Link>

      <div>
{renderContent()}
</div>




      <>
        <Modal active={active} onToggle={onToggle}>
          <SignUpForm setActive={setActive} onToggle={onToggle}/>
          <button type="button" onClick={onToggle}>
            Закрыть
          </button>
        </Modal>
      </>

      <>
        <Modal active={active1} onToggle={onToggle1}>
          <SignInForm setActive1={setActive1} onToggle1={onToggle1}/>
          <button type="button" onClick={onToggle1}>
            Закрыть
          </button>
        </Modal>
      </>


      
    </div>
  );
};

export default Navbar;
