import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { appBarMenu } from "../constants/appBar";
import { colors } from "../constants/colors";

const Header = () => {
  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // <600px

  return (
    <AppBar position="static" sx={{ bgcolor: colors.background }}>
      <Toolbar>
        <Link to={"/"}>
          <img src="/icons/full-logo.png" alt="Logo" style={{ height: 70 }} />
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
                borderBottom: `2px solid ${colors.logoRed}`,
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
