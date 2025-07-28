
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Button from "@mui/material/Button";
import { Outlet } from "react-router-dom";
// App.js ya index.js me
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function HOC() {
  return (
    <>
      <Header />

      {/* Children routes will render here */}
      <Outlet />

      <Footer />

      {/* ✅ Floating WhatsApp Enquire Now Button */}
      <Button
        variant="contained"
        color="success"
        href={`https://wa.me/918827951295?text=${encodeURIComponent(
          "Hi, I'm interested in your services."
        )}`}
        target="_blank"
        startIcon={<WhatsAppIcon />}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 2000,
          borderRadius: "30px",
          px: 3,
          py: 1.5,
          textTransform: "none",
          fontWeight: "bold",
          boxShadow: 4,
        }}
      >
        Enquire Now
      </Button>
    </>
  );
}
