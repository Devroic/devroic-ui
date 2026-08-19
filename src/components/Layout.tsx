import { Box, Container, CssBaseline } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = () => (
  <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <CssBaseline />
    <ScrollToTop />
    <Header />
    <Box component="main" sx={{ flex: 1, p: 3 }}>
      <Container maxWidth="md">
        <Outlet />
      </Container>
    </Box>
    <Footer />
  </Box>
);

export default Layout;
