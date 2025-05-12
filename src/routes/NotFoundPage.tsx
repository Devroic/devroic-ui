import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NotFoundPage = () => (
  <Box
    sx={{
      textAlign: "center",
      mt: 10,
      color: "white",
    }}
  >
    <ErrorOutlineIcon sx={{ fontSize: 80, color: "#90caf9", mb: 2 }} />
    <Typography variant="h4" gutterBottom>
      404 - Page Not Found
    </Typography>
    <Typography variant="body1" gutterBottom color="gray">
      Sorry, the page you’re looking for doesn’t exist.
    </Typography>
    <Button
      component={Link}
      to="/"
      variant="contained"
      sx={{ mt: 3, bgcolor: "#90caf9", color: "#000", fontWeight: 600 }}
    >
      Go Home
    </Button>
  </Box>
);

export default NotFoundPage;
