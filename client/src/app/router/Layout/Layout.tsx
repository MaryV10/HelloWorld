
import styles from './Layout.module.css';
import { Footer } from '@/widgets/Footer';
import { Navbar } from '@/widgets/Navbar';
import { Outlet } from 'react-router-dom';


const Layout: React.FC = () => {


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
