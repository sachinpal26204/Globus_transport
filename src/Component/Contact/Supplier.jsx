import React from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";

const SupplierSection = () => {
  return (
    <>
      {/* Heading */}
      <Box textAlign="center" py={4} color="#2c2c2c">
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Want to be our Supplier?
        </Typography>
        <Typography variant="subtitle1">
          Become an Globus supplier partner & grow your sales.
        </Typography>
      </Box>

      {/* Main content */}
      <Box
        sx={{
          //   bgcolor: '#2c2c2c',
          //   minHeight: '100vh',
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          px: 2,
        }}
      >
        {/* Left: Laptop Image */}
        <Box
          sx={{
            flex: { xs: "100%", md: "40%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src="/Image/laptop.jpg"
            alt="Laptop Preview"
            sx={{
              width: "100%",
              maxWidth: 500,
              borderRadius: 2,
              boxShadow: 3,
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Right: Contact Form */}
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

export default SupplierSection;
