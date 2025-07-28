import React from "react";
import {
  Box,
  Grid,
  Typography,
  // Link,
  //  Link as MuiLink,
  IconButton,
  Divider,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#333", color: "#fff", mt: 4, pt: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          //   border: "1px solid #444",
          margin: "25px",
          padding: "25px",
          //   borderRadius: "8px",

          "@media (max-width:980px)": {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
            margin: "10px",
            gap: "15px",
          },
        }}
      >
        <Box sx={{ flex: 1 }}>
          {/* ========== LEFT COLUMN ========== */}

          {/* Logo + Company Name */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",

              mb: 2,
              flexWrap: "wrap",
              flex: 1,
              // marginRight:" 30px",
             

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
            <Typography
              variant="h6"
              className="company-name"
              sx={{ color: "#ffcc00" ,marginTop: "10px",fontSize: "1.2rem"}}
            >
              Global Transport Company
            </Typography>
          </Box>

          {/* Company Description */}
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              color: "#fff",
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
              maxWidth: "310px",
              fontFamily: "Roboto, sans-serif",
              fontSize: "0.90rem",
              fontWeight: 400,
              lineHeight: "24px",
              textAlign: "left",
              border: "1px solid #444",
              margin: "0 auto",
            }}
          >
            Global Transport Company is dedicated to providing reliable and
            efficient transportation solutions for individuals, businesses, and
            industries — all under one roof.
          </Typography>

          {/* Social Icons */}
          {/* <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>

            <IconButton
              sx={{
                width: 40,
                height: 40,
                border: "1px solid #bbb",
                borderRadius: "50%",
                color: "#bbb",
                backgroundColor: "rgb(10,102,194,0.1)",
                transition: "all 0.3s ease",
                "& svg": { fontSize: 28 },
                "&:hover": {
                  borderColor: "#E4405F",
                  color: "#E4405F",
                  transform: "scale(1.1)",
                  backgroundColor: "rgba(228,64,95,0.1)",
                },
              }}
            >
              <TwitterIcon />
            </IconButton>

          
            <IconButton
              sx={{
                width: 40,
                height: 40,
                border: "1px solid #bbb",
                borderRadius: "50%",
                color: "#bbb",
                backgroundColor: "rgb(10,102,194,0.1)",
                transition: "all 0.3s ease",
                "& svg": { fontSize: 28 },
                "&:hover": {
                  borderColor: "#E4405F",
                  color: "#E4405F",
                  transform: "scale(1.1)",
                  backgroundColor: "rgba(228,64,95,0.1)",
                },
              }}
            >
              <FacebookIcon />
            </IconButton>

           
            <IconButton
              sx={{
                width: 40,
                height: 40,
                border: "1px solid #bbb",
                borderRadius: "50%",
                color: "#bbb",
                backgroundColor: "rgb(10,102,194,0.1)",
                transition: "all 0.3s ease",
                "& svg": { fontSize: 28 },
                "&:hover": {
                  borderColor: "#E4405F",
                  color: "#E4405F",
                  transform: "scale(1.1)",
                  backgroundColor: "rgba(228,64,95,0.1)",
                },
              }}
            >
              <InstagramIcon />
            </IconButton>

           
            <IconButton
              sx={{
                width: 40,
                height: 40,
                border: "1px solid #bbb",
                backgroundColor: "rgb(10,102,194,0.1)",
                borderRadius: "50%",
                color: "#bbb",
                transition: "all 0.3s ease",
                "& svg": { fontSize: 28 },
                "&:hover": {
                  borderColor: "#E4405F",
                  color: "#E4405F",
                  transform: "scale(1.1)",
                  backgroundColor: "rgba(10,102,194,0.1)",
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box> */}
        </Box>

        {/* ========== MIDDLE COLUMN ========== */}
        {/* <Box sx={{ flex: 1, pl: 2 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: "bold",
              letterSpacing: "0.5px",
              color: "#fff",
            }}
          >
            PRODUCTS
          </Typography>

         
          <Box
            sx={{
              boxSizing: "border-box",
              width: "100%",
              height: "60%",
              display: "flex",
              flexWrap: "wrap", // items wrap होकर multiple columns में जाएंगे
              justifyContent: "space-between",
            }}
          >
            {[
              "Ready Mix Concrete",
              "Metal",
              "Cement",
              "Roofing",
              "Steel",
              "Sands",
              "Aggregates",
              "Equipments",
            ].map((product) => (
              <Typography
                key={product}
                component="a"
                href="#"
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "1rem",
                  fontWeight: 300,
                  lineHeight: 1.5,
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  display: "flex",
                  width: "40%",
                //   whiteSpace: "nowrap",

                  
                  textAlign: "left", // 2 columns layout (48% + gap)
                  "&:hover": {
                    color: "#db2e94",
                    pl: 0.5, // हल्का slide effect
                  },
                }}
              >
                › &nbsp; {product}
              </Typography>
            ))}
          </Box>
        </Box> */}

        {/* ========== RIGHT COLUMN ========== */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            CONTACT US
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              color: "#ccc",
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
              maxWidth: "80%",
              fontFamily: "Roboto, sans-serif",
              fontSize: "1rem",
              fontWeight: 400,
              lineHeight: 1.5,
              textAlign: "left",
              marginLeft: "15px",
            }}
          >
            Akshar business park, Y-3120, Janta Market Rd, opposite APMC Fruit &
            Vegetable Market, Sector 25, Vashi, Navi Mumbai, Maharashtra -
            400703
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#ccc", textAlign: "left", marginLeft: "15px" }}
          >
            <strong>Phone:</strong> +91 75065 75757 / +91 88795 75757
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#ccc", textAlign: "left", marginLeft: "15px" }}
          >
            <strong>Landline:</strong> +91 2246076161
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#ccc", textAlign: "left", marginLeft: "15px" }}
          >
            <strong>Email:</strong> info@gaamupinfra.com
          </Typography>
        </Box>
      </Box>
      {/* Divider */}
      <Divider
        sx={{
          my: 3,
          borderColor: "rgba(255,255,255,0.2)",
          backgroundColor: "#404040",
        }}
      />

      {/* Bottom Copyright */}
      <Box
        sx={{
          textAlign: "center",
          pb: 2,
          fontSize: "0.9rem",
          color: "#aaa",
        }}
      >
        <Typography>
          <span style={{ color: "#e91e63", cursor: "pointer" }}>
            <Link to='/policy' style={{ color: "#e91e63", textDecoration: "none" }}>
            Privacy Policy
            </Link>
            
          </span>{" "}
          | Copyright © {new Date().getFullYear()} <strong>GaamUP Infra</strong>
          . All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
