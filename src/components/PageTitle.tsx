import { Typography, Box } from "@mui/material";

const PageTitle = ({ children }: { children: React.ReactNode }) => (
  <Box sx={{ mb: 4 }}>
    <Typography
      variant="h4"
      component="h1"
      sx={{
        fontWeight: "bold",
        color: "white",
        borderBottom: "2px solid",
        borderColor: "secondary.main",
        display: "inline-block",
        pb: 0.5,
      }}
    >
      {children}
    </Typography>
  </Box>
);

export default PageTitle;
