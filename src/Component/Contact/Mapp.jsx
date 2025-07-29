import React from "react";
import { Box, Grid, Typography, TextField, Button, Paper } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const ContactSection = () => {
  return (
    <>
      <Box sx={{ p: 4, backgroundColor: "#fefefe"}}>
        <Grid container spacing={5} justifyContent="space-evenly" >
          {/* Location Info */}
          {/* <Box sx={{display:"flex",flexGrow:1,border:"2px solid black"}}> */}
          <Grid item xs={12} md={4} >
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <LocationOnIcon sx={{ fontSize: 40, color: "#f72585" }} />
              <Typography variant="h6" mt={1} fontWeight="bold">
                Our Location
              </Typography>
              <Typography variant="body2">
                Mumbai
              </Typography>
            </Paper>
          </Grid>
          {/* </Box> */}

          {/* Email Info */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <EmailIcon sx={{ fontSize: 40, color: "#f72585" }} />
              <Typography variant="h6" mt={1} fontWeight="bold">
                Email Us
              </Typography>
              <Typography variant="body2">info@gaamupinfra.com</Typography>
            </Paper>
          </Grid>

          {/* Call Info */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center",whiteSpace:"normal",wordBreak:"break-word" }}>
              <CallIcon sx={{ fontSize: 40, color: "#f72585" }} />
              <Typography variant="h6" mt={1} fontWeight="bold">
                Call Us
              </Typography>
              <Typography variant="body2">
                   +91 7506575757
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Map */}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        //   px: 2,
          paddingLeft:"20px",
          background: "#f9f9f9",
        //   border:"1px solid black",
          margin:5
        }}
      >
        {/* <Grid item xs={12} md={6}> */}
        <Box
          sx={{
            flex: { xs: "100%", md: "40%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <iframe
            title="GaamUP Infra Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8593658204793!2d72.90123341490285!3d19.06211888709724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7e3d18fc0c7%3A0x8bcad55dc22ef78e!2sChembur%20Railway%20Station!5e0!3m2!1sen!2sin!4v1695893774583!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: 10 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>

        <Box
          sx={{
            flex: { xs: "100%", md: "40%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: "100%",
              maxWidth: 500,
              p: 4,
              borderRadius: 3,
              bgcolor: "#fff",
              color: "#000",
            }}
          >
            <form>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                type="email"
                required
              />
              <TextField
                fullWidth
                label="Contact No."
                variant="outlined"
                margin="normal"
                type="tel"
                required
              />
              <Button
                href={`https://wa.me/918827951295?text=${encodeURIComponent(
                  "Hi, I'm interested in your services."
                )}`}
                target="_blank"
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  bgcolor: "#ffc400",
                  color: "#000",
                  fontWeight: "bold",
                  "&:hover": {
                    bgcolor: "#ffb300",
                  },
                }}
              >
                Send
              </Button>
            </form>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default ContactSection;
