
import { useAppDispatch } from '@/shared/hooks/reduxHooks';
import styles from './Layout.module.css';
import { Footer } from '@/widgets/Footer';
import { Navbar } from '@/widgets/Navbar';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { refreshAccessToken } from '@/entities/user';


const Layout: React.FC = () => {
const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshAccessToken());
  }, [dispatch]);


  return (
    <div className={styles.container}>
      <Navbar />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
