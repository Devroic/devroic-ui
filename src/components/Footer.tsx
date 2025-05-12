import { Box, Typography, IconButton, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { colors } from "../constants/colors";

const Footer = () => (
  <Box my={4}>
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        py: 1,
        borderTop: "1px solid #333",
        bgcolor: colors.background,
        textAlign: "center",
      }}
    >
      <Stack direction="row" spacing={2} justifyContent="center" mb={0.5}>
        <IconButton
          component="a"
          href="https://github.com/andreaseracleous99"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: colors.lightBlue, p: 0.5 }}
        >
          <GitHubIcon fontSize="small" />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/andreas-eracleous-17418a240/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: colors.lightBlue, p: 0.5 }}
        >
          <LinkedInIcon fontSize="small" />
        </IconButton>
      </Stack>
      <Typography variant="caption" color="gray">
        © {new Date().getFullYear()} Andreas Eracleous
      </Typography>
    </Box>
  </Box>
);

export default Footer;
