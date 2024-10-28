
import { useAppDispatch } from '@/shared/hooks/reduxHooks';
import styles from './Layout.module.css';
import { Footer } from '@/widgets/Footer';
import { Navbar } from '@/widgets/Navbar';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { refreshAccessToken } from '@/entities/user';
import { getMyPlaces } from '@/entities/place/api/placeThunks';


const Layout: React.FC = () => {
const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(refreshAccessToken()).unwrap();
        await dispatch(getMyPlaces()).unwrap();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
    
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
