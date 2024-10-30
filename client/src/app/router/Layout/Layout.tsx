
import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';
import styles from './Layout.module.css';
import { Footer } from '@/widgets/Footer';
import { Navbar } from '@/widgets/Navbar';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { refreshAccessToken } from '@/entities/user';
import { getMyPlaces } from '@/entities/place/api/placeThunks';


const Layout: React.FC = () => {
const dispatch = useAppDispatch();
const user= useAppSelector((state) => state.user.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(refreshAccessToken()).unwrap();
        if(user?.id) {
        await dispatch(getMyPlaces()).unwrap()
      }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
    
  }, [dispatch, user?.id]);




  return (
    <div className={styles.container}>
      <Navbar />

      <main>
        <Outlet />
      </main>
      <footer className={styles.footer}>
      <Footer />
      </footer>
    </div>
  );
};

export default Layout;
