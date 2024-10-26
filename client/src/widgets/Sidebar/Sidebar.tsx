import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

export default function Sidebar({ places: [...places] }) {
  const [open, setOpen] = React.useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const SidebarList = (
    <Box
      sx={{
        width: "30vw",
        position: "fixed",
        marginTop: "100px",
        top: 0,
        right: open ? 0 : "-30vw",
        height: "100vh",
        backgroundColor: "white",
        boxShadow: 3,
        transition: "right 0.3s ease-in-out",
        zIndex: 300,
        overflowY: "auto",
      }}
      role="presentation"
    >
      {/* Close button inside Sidebar */}
      <Button
        onClick={toggleSidebar}
        sx={{
          position: "absolute",
          top: "10px",
          zIndex: 350,
          backgroundColor: "white",
          border: "1px solid gray",
          borderRadius: "5px",
          padding: "5px 10px",
        }}
      >
        Close
      </Button>

      <Box sx={{ marginTop: "60px", paddingX: 2, maxHeight: "calc(100vh - 80px)", overflowY: "auto" }}>
        {places.map((place:{ id: number; title: string; description: string } ) => (
          <React.Fragment key={place.id}>
            <Link to={`/OnePlacePage/${place.id}`} style={{ textDecoration: 'none' }}>
              <List>
                <ListItem>
                  <Button>{place.title}</Button>
                  <p>{place.description}</p>
                </ListItem>
              </List>
            </Link>
            <Divider />
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );

  return (
    <div>
      {/* Toggle button to open Sidebar */}
      <Button onClick={toggleSidebar} sx={{ marginTop: "20px" }}>Toggle Sidebar</Button>
      
      {/* Sidebar content */}
      {SidebarList}
    </div>
  );
}