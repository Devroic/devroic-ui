import { Box, Typography, IconButton, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 2,
      borderTop: "1px solid #333",
      bgcolor: "background.default",
      textAlign: "center",
    }}
  >
    <Stack direction="row" spacing={2} justifyContent="center" mb={0.5}>
      <IconButton
        component="a"
        href="https://github.com/devroic"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        sx={{ color: "primary.main", p: 0.5 }}
      >
        <GitHubIcon fontSize="small" />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/andreaseracleous99/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        sx={{ color: "primary.main", p: 0.5 }}
      >
        <LinkedInIcon fontSize="small" />
      </IconButton>
      <IconButton
        component="a"
        href="mailto:andreas.eracleous99@hotmail.com"
        aria-label="Send an email"
        sx={{ color: "primary.main", p: 0.5 }}
      >
        <EmailIcon fontSize="small" />
      </IconButton>
    </Stack>
    <Typography variant="caption" color="gray">
      © {new Date().getFullYear()} Andreas Eracleous
    </Typography>
  </Box>
);

export default Footer;
