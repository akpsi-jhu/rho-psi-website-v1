import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../styles/HeaderStyles.css"
import { color } from "@mui/system";
const Navbar = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", color: "#0C406F"}}>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        AKP
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/brothers"}>Brothers</NavLink>
        </li>
        <li>
          <NavLink to={"/recruitment"}>Recruitment</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} position="absolute"  sx={{ bgcolor: "transparent", boxShadow: "none", marginTop: 4, color: props.blue ? "#0C406F": "white"}}>
          <Toolbar>
            <Box sx= {{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "glegoo",
                alignItems: "center"
            }}>
                <Typography 
                variant="h4"
                component="div"
                 sx = {{
                    fontFamily: "glegoo",
                    marginLeft: 20
                }}
                > AKΨ
                </Typography>
                <Box sx={{ display: { xs: "none", sm: "block"}, marginRight: 20, fontSize: 20 }}>
                <ul className="navigation-menu">
                    <li>
                    <NavLink activeClassName="active" to={"/"}>
                        Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to={"/brothers"}>Brothers</NavLink>
                    </li>
                    <li>
                    <NavLink to={"/recruitment"}>Recruitment</NavLink>
                    </li>
                    <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                    </li>
                </ul>
                </Box>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};


export default Navbar;
