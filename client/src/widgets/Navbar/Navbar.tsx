import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { ROUTES } from "@/app/router/routes";
import logo from "../../../public/logo.png";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { logout } from "@/entities/user";
import { Button } from "antd";

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
 

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(`.${styles.container}`);
      if (navbar) {
        navbar.classList.toggle(styles.scrolled, window.scrollY > 1);
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

  return (
    <div className={styles.container}>

      <img style={{ width: "150px" }} src={logo} alt="" />
      <div className={styles.bar}>
        <Link to={ROUTES.HOME}>
          <button className={styles.navButton}>Карта</button>
        </Link>

        {user && <Button onClick={handleLogout}>Logout</Button>}

      <img style={{width: "150px"}} src={logo} alt="" />
<div className={styles.bar}>
<Link to={ROUTES.MAP}>
      <button className={styles.navButton}>
  Карта
      </button>
      </Link>


        <>
          <Link to={ROUTES.SIGNIN}>
            <button className={styles.navButton}>Вход</button>
          </Link>

          <Link to={ROUTES.SIGNUP}>
            <button className={styles.navButton} >
              Регистрация
            </button>
          </Link>
        </>
      </div>
     
    </div>
    </div>
  );
};

export default Navbar;

