import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";

const HomePage = () => {
  useDocumentTitle("Home");

  return (
    <Box sx={{ py: { xs: 6, sm: 10 }, textAlign: "center" }}>
      <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
        Hi, I'm Andreas 👋
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        sx={{ mt: 2, maxWidth: 520, mx: "auto", fontWeight: 400 }}
      >
        I'm a Full Stack Software Developer. This is where I publish the
        projects I build on the side.
      </Typography>
      <Button
        component={RouterLink}
        to="/projects"
        variant="contained"
        size="large"
        endIcon={<ArrowForwardIcon />}
        sx={{ mt: 4 }}
      >
        View Projects
      </Button>
    </Box>
  );
};

export default HomePage;
