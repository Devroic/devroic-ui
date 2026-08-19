import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import useDocumentTitle from "../hooks/useDocumentTitle";

const NotFoundPage = () => {
  useDocumentTitle("Page Not Found");

  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 10,
        color: "white",
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 80, color: "primary.main", mb: 2 }} />
      <Typography variant="h4" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom color="text.secondary">
        Sorry, the page you’re looking for doesn’t exist.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{ mt: 3, bgcolor: "primary.main", color: "#000", fontWeight: 600 }}
      >
        Go Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
