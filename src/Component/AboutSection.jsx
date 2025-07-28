import { Box, Typography } from "@mui/material";
import ImageSlider from "./ImageSlider/ImageSlider";

export default function AboutSection() {
  return (
    <>
    
    
     <ImageSlider />
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 4,
        padding: "40px",
        background: "#f9f9f9",
        borderRadius: "12px",

        // ✅ Responsive: below 900px → column
        "@media (max-width:900px)": {
          flexDirection: "column",
          textAlign: "center",
        },
      }}
    >
    



      <Box sx={{ flex: 1 }}>
  <Typography
    variant="h6"
    sx={{
      fontWeight: "bold",
      color: "#db2e94",
      mb: 1,
      textAlign: "left",
      fontSize: "1.5rem",
    }}
  >
    About Globus Transport Company
  </Typography>

  <Typography
    variant="body1"
    sx={{
      fontSize: "1.1rem",
      color: "#444",
      lineHeight: 1.6,
      mb: 2,
      textAlign: "left",
      
    }}
  >
    <strong>Globus Transport Company (GTC)</strong> is a reliable and
    future-focused logistics partner committed to delivering excellence in the
    transportation and construction support industry. Since inception, GTC has
    played a vital role in streamlining the movement of goods, construction
    materials, and heavy machinery across cities and remote locations.
  </Typography>

  <Typography
    variant="body1"
    sx={{
      fontSize: "1.1rem",
      color: "#444",
      lineHeight: 1.6,
      mb: 2,
      textAlign: "left",
    }}
  >
    With a modern fleet, experienced workforce, and customer-first approach, we
    specialize in providing tailored transport solutions to developers,
    contractors, and industries involved in infrastructure and real estate
    projects.
  </Typography>


  
</Box>


      {/* ✅ RIGHT IMAGE */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src="/Image/Pic1.jpg" // ✅ Public folder path
          alt="About GaamUP"
          loading="lazy"
          sx={{
            width: "100%",
            maxWidth: 450,
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        />
      </Box>
    </Box>
    </>
  );
}
