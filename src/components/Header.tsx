import { AppBar, Box, Button, Toolbar, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link, NavLink } from "react-router-dom";
import { appBarMenu } from "../constants/appBar";

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // <600px

  return (
    <AppBar position="static" sx={{ bgcolor: "background.default" }}>
      <Toolbar>
        <Link to={"/"} aria-label="Devroic home">
          <img
            src={isSmallScreen ? "/icons/logo.png" : "/icons/full-logo.png"}
            alt="Devroic logo"
            style={{ height: isSmallScreen ? 50 : 70, display: "block" }}
          />
        </Link>

        <Box sx={{ flexGrow: 1 }} />

        {appBarMenu.map((tab, idx) => (
          <Button
            key={idx}
            component={NavLink}
            to={tab.to}
            sx={{
              color: "white",
              mx: 1,
              "&.active": {
                borderBottom: "2px solid",
                borderColor: "secondary.main",
                fontWeight: "bold",
              },
            }}
          >
            {tab.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
