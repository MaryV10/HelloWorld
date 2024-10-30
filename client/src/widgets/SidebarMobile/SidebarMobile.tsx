import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

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
        backdropFilter: "blur(20px)",
        boxShadow: 3,
        transition: "right 0.3s ease-in-out",
        zIndex: 300,
        overflowY: "auto",
        borderRadius: "10px 0px 0px 0px",
      }}
      role="presentation"
    >
      {/* Close button inside Sidebar */}
      <Button
        onClick={toggleSidebar}
        sx={{
          position: "absolute",
          top: "10px",
          fontWeight: "normal",
          zIndex: 350,
          fontFamily: "Unbounded",
          color: "white",
          backgroundColor: "#141213",
          border: "1px solid gray",
          borderRadius: "15px",
          padding: "5px 10px",
          marginLeft: "10px",
        }}
      >
        Закрыть
      </Button>

      <Box
        sx={{
          marginTop: "60px",
          paddingX: 2,
          maxHeight: "calc(100vh - 80px)",
          overflowY: "auto",
          backgroundColor: "white",
          borderRadius: "15px"
        }}
      >
        {places.map(
          (place: { id: number; title: string; description: string,  Photos: { imageUrl: string }[]}) => (
            <React.Fragment key={place.id}>
              <Link
                to={`/OnePlacePage/${place.id}`}
                style={{ textDecoration: "none" }}
              >
                <List>
                  <ListItem>
                  <img src={place.Photos[0]?.imageUrl} alt="img" style={{ width: "100px", height: "100px", borderRadius: "10px", marginRight: "15px", objectFit: "cover" }}/>
                    <h1 className={styles.title}>{place.title}</h1>
                  </ListItem>
                </List>
              </Link>
              <Divider />
            </React.Fragment>
          )
        )}
      </Box>
    </Box>
  );

  return (
    <div>
      {/* Toggle button to open Sidebar */}
      <Button
        onClick={toggleSidebar}
        sx={{
          fontFamily: "Unbounded",
          fontWeight: "normal",
          marginTop: "20px",
          color: "white",
          backgroundColor: "#141213",
          borderRadius: "15px",
          padding: "5px 10px",
          marginRight: "10px",
        }}
      >
        Список мест
      </Button>

      {/* Sidebar content */}
      {SidebarList}
    </div>
  );
}