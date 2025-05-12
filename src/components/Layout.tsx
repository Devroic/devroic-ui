import { Box, Container, CssBaseline } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => (
  <Box sx={{ minHeight: "100vh", pb: 6 }}>
    <CssBaseline />
    <Header />
    <Box component="main" sx={{ p: 3 }}>
      <Container>
        <Box sx={{ maxWidth: 800, mx: "auto" }}>
          <Outlet />
        </Box>
      </Container>
    </Box>
    <Footer />
  </Box>
);

export default Layout;
