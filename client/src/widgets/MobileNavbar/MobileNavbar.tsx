import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MapIcon from '@mui/icons-material/Map';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd'; 
import styles from './MobileNavbar.module.css';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';
import { logout } from '@/entities/user';

const MobileMenu = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.user);

  const handleLogout = () => {
    dispatch(logout());
    toggleDrawer();
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleMenuClick = () => {
    toggleDrawer();
  };

  return (
    <div>
      <AppBar position="static" style={{ background: 'none', borderRadius: '20px',boxShadow: 'none' }}>
        <Toolbar>
        <Button
  onClick={toggleDrawer}
  style={{ background: 'transparent', padding: 0 }} 
  className={styles.customButton} 
>
  <div className={`${styles.menuIcon} ${open ? styles.open : ''}`}>
    <div className={styles.bar}></div>
    <div className={styles.bar}></div>
    
  </div>
</Button>
          <Typography variant="h6"></Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        PaperProps={{
          style: {
            backgroundColor: '#f1e8d9', 
            color: 'white', 
            borderRight: "2px solid #e9dbc1",
          },
        }}
      >
        <List style={{ width: 250 }}>
          {!user && (
            <>
              <ListItem>
                <Button
                  component={Link}
                  to="/signin"
                  fullWidth
                  variant="contained"
                  startIcon={<LoginIcon />} 
                  onClick={handleMenuClick}
                  style={{
                    backgroundColor: '#151213',
                    color: 'white',
                    marginBottom: '10px',
                    borderRadius: '20px',
                    boxShadow: 'none',
                    fontFamily: 'Unbounded',
                  }}
                >
                  Войти
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  component={Link}
                  to="/signup"
                  fullWidth
                  variant="contained"
                  startIcon={<PersonAddIcon />}
                  onClick={handleMenuClick} 
                  style={{
                    backgroundColor: '#151213',
                    color: 'white',
                    marginBottom: '10px',
                    borderRadius: '20px',
                    boxShadow: 'none',
                    fontFamily: 'Unbounded',
                  }}
                >
                  Регистрация
                </Button>
              </ListItem>
            </>
          )}
          <ListItem>
            <Button
              component={Link}
              to="/map"
              fullWidth
              variant="contained"
              startIcon={<MapIcon />}
              onClick={handleMenuClick}
              style={{
                backgroundColor: '#007247',
                color: 'white',
                marginBottom: '10px',
                borderRadius: '20px',
                boxShadow: 'none',
                fontFamily: 'Unbounded',
              }}
            >
              Карта
            </Button>
          </ListItem>
          <ListItem>
            <Button
              component={Link}
              to="/"
              fullWidth
              variant="contained"
              startIcon={<HomeIcon />}
              onClick={handleMenuClick}
              style={{
                backgroundColor: '#007247',
                color: 'white',
                marginBottom: '10px',
                borderRadius: '20px',
                boxShadow: 'none',
                fontFamily: 'Unbounded',
              }}
            >
              Домой
            </Button>
          </ListItem>
          {user && (
            <ListItem>
              <Button
                onClick={handleLogout}
                fullWidth
                variant="contained"
                startIcon={<ExitToAppIcon />}
                style={{
                  backgroundColor: '#151213',
                  color: 'white',
                  marginBottom: '10px',
                  borderRadius: '20px',
                  boxShadow: 'none',
                  fontFamily: 'Unbounded',
                }}
              >
                Выйти
              </Button>
            </ListItem>
          )}
        </List>
      </Drawer>
    </div>
  );
};

export default MobileMenu;