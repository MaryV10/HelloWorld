import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import {isMobile} from 'react-device-detect';
import { ROUTES } from "@/app/router/routes";
import logo from "../../../public/logo.png";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { logout } from "@/entities/user";
import MobileMenu from "../MobileNavbar/MobileNavbar";

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

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

  const renderContent = () => {
    if (isMobile) {
      return <div><MobileMenu /></div>;
    }
    return <div><div className={styles.bar}>
    {user && <p style={{background:"#e9dbc1", border: "2px solid black", padding: "6px", borderRadius: "20px", color: "black", paddingLeft: "10px", paddingRight: "10px"}}>Привеет, {user.nickname}</p>}
    <Link to={ROUTES.MAP}>
      <button className={styles.navButton}>Карта</button>
    </Link>
    {user ? (
      <>
        <button className={styles.navButton} onClick={handleLogout}>
          Logout
        </button>
      </>
    ) : (
      <>
        <Link to={ROUTES.SIGNIN}>
          {" "}
          <button className={styles.navButton}>Вход</button>
        </Link>
        <Link to={ROUTES.SIGNUP}>
          <button className={styles.navButton}>Регистрация</button>
        </Link>
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
    </div>
  );
};

export default Navbar;
