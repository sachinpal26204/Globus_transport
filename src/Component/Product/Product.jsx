import { Box, Typography } from "@mui/material";
import ContactSection from "../Contact/Mapp";

export default function Product() {
  return (
    <>

    <Typography
      variant="h6"
      sx={{
        fontWeight: "bold",
        color: "#db2e94",
        mb: 1,
        textAlign: "center",
        fontSize: "1.5rem",
      }}
    >
      Products
    </Typography>

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
      High-Quality Sand Supply
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
      <strong>Our Sand Supply services</strong> ensure timely delivery of
      high-grade river and crushed sand for construction projects. Whether it's
      residential, commercial, or infrastructure development, we provide clean,
      sorted, and quality-tested sand tailored to your site needs.
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
      We understand the critical role sand plays in building strong foundations.
      With efficient logistics, a reliable sourcing network, and commitment to
      quality, we make sure your sand supply is never a bottleneck in your
      project timeline.
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
      src="/Image/sand.jpg" // ✅ Public folder path
      alt="Sand Supply"
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



<Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
    padding: "40px",
    background: "#f9f9f9",
    borderRadius: "12px",
    mt: 6, // optional spacing from previous section
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
      Premium Aggregate Supply
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
      <strong>Our Aggregate Supply services</strong> deliver high-quality
      crushed stone and coarse aggregates used in concrete mixes, road bases,
      and foundation works. We serve contractors, developers, and infrastructure
      companies with consistent and tested material.
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
      Backed by efficient loading, transport, and timely dispatch, we ensure
      that your aggregate requirements are fulfilled without delays. Our
      material complies with construction-grade specifications for strength and
      reliability.
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
      src="/Image/aggregate construction.jpg" // replace with correct aggregate image if needed
      alt="Aggregate Supply"
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


<ContactSection/>

    </>
  );
}
