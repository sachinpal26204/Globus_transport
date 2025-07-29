import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240; // Width of the drawer

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Product", path: "/product" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => setOpen(!open);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawer = (
    <Box sx={{ width: drawerWidth }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py: 1.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "@media (max-width: 500px)": {
              "& img": {
                width: "40px",
                height: "40px",
              },
              "& .company-name": {
                fontSize: "1rem",
              },
            },
          }}
        >
          <img
            src="/Image/Logo1.png" // ✅ Public folder path
            alt="Logo"
            style={{
              width: 50,
              height: 50,
              marginRight: 8,
              borderRadius: "50%",
            }}
          />
        </Box>

        <IconButton onClick={toggleDrawer}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={toggleDrawer}
              selected={location.pathname === item.path}
              sx={{ "&:hover": {
                        backgroundColor: "rgb(241, 14, 14)", // light grey on hover
                      },}} 
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* ✅ Fixed Header */}

      <Box
        sx={{
          height: "50vh",
          backgroundImage: `linear-gradient(rgba(9, 30, 62, 0.7), rgba(9, 30, 62, 0.7)), url(/Image/Header.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#fff",
          position: "relative",
        }}
      >
        {/* ✅ Contact Info inside background */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            marginLeft: "50px",
            gap: 2,
            position: "absolute",
            top: 10,
            flexDirection: { sm: "row" },
            color: "#fff",
          }}
        >
          <Typography>📧 contact@example.com</Typography>
          <Typography>📞 +91-9876543210</Typography>
        </Box>
        <AppBar
          position="fixed"
          elevation={scrolled ? 4 : 0}
          sx={{
            transition: "all 0.3s ease",
            backgroundColor: scrolled ? "#041f45f5" : "transparent", // scroll par white
            top: scrolled ? 0 : 70, // top 0 ya 30 scroll ke hisaab se
            color: scrolled ? "#000" : "#fff", // text color bhi switch kare
            boxShadow: scrolled ? "0px 2px 6px rgba(0,0,0,0.1)" : "none",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-around" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "@media (max-width: 500px)": {
                  "& img": {
                    width: "40px",
                    height: "40px",
                  },
                  "& .company-name": {
                    fontSize: "1rem",
                  },
                },
              }}
            >
              <img
                src="/Image/Logo1.png" // ✅ Public folder path
                alt="Logo"
                style={{
                  width: 70,
                  height: 70,
                  marginRight: 8,
                  borderRadius: "50%",
                }}
              />
              <Typography
                variant="h6"
                className="company-name"
                sx={{ color: "#ffcc00" }}
              >
                {/* Global Transport Company */}
              </Typography>
            </Box>

            <Box>
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{
                      color:
                        location.pathname === item.path ? "#ffcc00" : "#fff",
                      fontWeight:
                        location.pathname === item.path ? "bold" : "normal",
                      "&:hover": {
                        backgroundColor: "red", // light grey on hover
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              <IconButton
                color="inherit"
                edge="end"
                sx={{ display: { md: "none" } }} // Show only <900px
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* ✅ Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        sx={{ display: { xs: "block", md: "none", top: 30 } }}
      >
        {drawer}
      </Drawer>

      <Toolbar />
    </>
  );
}
