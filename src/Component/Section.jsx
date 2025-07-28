import { Box, Typography } from "@mui/material";

export default function AboutSection() {
  return (
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
      {/* ✅ LEFT CONTENT */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.1rem",
            color: "#444",
            lineHeight: 1.6,
            mb: 2,
          }}
        >
          The journey of <strong>GaamUP</strong> began with the objective of providing all kinds of
          construction-related raw materials, equipment, and solutions to
          individuals, developers, and construction companies all at one place.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "1.1rem",
            color: "#444",
            lineHeight: 1.6,
            mb: 3,
          }}
        >
          Situated in Navi Mumbai, GaamUP Infra Pvt Ltd has made a name for
          itself which is synonymous with <strong>superior quality</strong> and
          service in the construction fraternity.
        </Typography>

        {/* Vision */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#db2e94",
            mb: 1,
          }}
        >
          Vision
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1rem", color: "#555", lineHeight: 1.6, mb: 3 }}
        >
          To construct a positive change by making sustainable construction-related products.
        </Typography>

        {/* Mission */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#db2e94",
            mb: 1,
          }}
        >
          Mission
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1rem", color: "#555", lineHeight: 1.6 }}
        >
          To provide innovative and superior quality products to our customers at affordable rates.
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
  src="https://mui.com/static/logo.png"
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
  );
}
