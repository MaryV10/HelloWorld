
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { ROUTES } from "@/app/router/routes";
import logo from "../../../public/logo.png";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { logout } from "@/entities/user";
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


  return (
    <div className={styles.container}>

      <Link to={ROUTES.HOME}>
        <img style={{ width: "150px" }} src={logo} alt="" />
      </Link>



      <>
        <Modal active={active} onToggle={onToggle}>
          <SignUpForm setActive={setActive} />
          <button type="button" onClick={onToggle}>
            Закрыть
          </button>
        </Modal>
      </>

      <>
        <Modal active={active1} onToggle={onToggle1}>
          <SignInForm setActive1={setActive1} onToggle={onToggle1}/>
          <button type="button" onClick={onToggle1}>
            Закрыть
          </button>
        </Modal>
      </>


      <div className={styles.bar}>
        <Link to={ROUTES.MAP}>
          <button className={styles.navButton}>Карта</button>
        </Link>
        {user ? (
          <button className={styles.navButton} onClick={handleLogout}>
            Logout
          </button>
        ) : (

          <div>

             <button
              type="button"
              className={styles.navButton}
              onClick={onToggle1}
            >
              Вход
            </button>

            <button
              type="button"
              className={styles.navButton}
              onClick={onToggle}
            >
              Регистрация
            </button>



          </div>
        )}
      </div>
    </div>

  );
};

export default Navbar;
