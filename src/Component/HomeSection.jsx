import { Box, Typography, Grid, Paper } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
export default function HomeSection() {
  const features = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40, color: "#f9b233" }} />,
      title: "Delivery On Time",
      desc: "Timely delivery with real-time tracking from procurement to your site.",
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 40, color: "#f9b233" }} />,
      title: "Quality Assurance",
      desc: "We partner with certified suppliers ensuring high-quality materials.",
    },
    {
      icon: <BuildCircleIcon sx={{ fontSize: 40, color: "#f9b233" }} />,
      title: "Project Contain Approach",
      desc: "Custom procurement tailored to fit project-specific needs.",
    },
    {
      icon: (
        <PlaylistAddCheckCircleIcon sx={{ fontSize: 40, color: "#f9b233" }} />
      ),
      title: "Efficient Requirement Process",
      desc: "Streamlined order flow from RFQ to PO with expert support.",
    },
    {
      icon: <ViewInArIcon sx={{ fontSize: 40, color: "#f9b233" }} />,
      title: "Project Size Expertise",
      desc: "From small jobs to large-scale projects, we’ve got you covered.",
    },
    {
      icon: <ThumbUpAltIcon sx={{ fontSize: 40, color: "#f9b233" }} />,
      title: "Our Commitment",
      desc: "Reliable, consistent service with a long-term partnership mindset.",
    },
  ];

  return (
    <>
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
             fontSize: "1.2rem"
          },
        }}
      >
        <Box sx={{ flex: 1, paddingLeft: "20px" }}>
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
            future-focused logistics partner committed to delivering excellence
            in the transportation and construction support industry. Since
            inception, GTC has played a vital role in streamlining the movement
            of goods, construction materials, and heavy machinery across cities
            and remote locations.
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
            With a modern fleet, experienced workforce, and customer-first
            approach, we specialize in providing tailored transport solutions to
            developers, contractors, and industries involved in infrastructure
            and real estate projects.
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

      <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 2, color: "#db2e94" }}
        >
          Why Us?
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ color: "#555", mb: 4 ,padding:2}}
        >
          The reasons to choose us as your procurement partner
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          px={{ xs: 2, md: 6 }}
          

          sx={{
           
            p: 3,
            borderRadius: "10px",
            // textAlign: "center",
            maxWidth: "70%",
            mx: "auto", 
          }}
        >
          {features.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  width: "100%",
                  transition:
                    "all 0.5s ease, background 0.5s ease, border 0.5s ease",
                  border: "1px solid #eee",
                  background: "#fff",
                  "&:hover": {
                    boxShadow: 4,
                    border: "1px solid #db2e94",
                    background:
                      "linear-gradient(to right, #0098DB 0%, #EB268F 100%)",
                    color: "#fff", // optional: white text for contrast
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{item.icon}</Box>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{
                    maxWidth: "300px",
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                  }}
                  gutterBottom
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                    overflowWrap: "break-word",
                    maxWidth: "250px",
                    fontSize: "0.9rem",
                  }}
                >
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
