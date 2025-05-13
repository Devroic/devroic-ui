import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { appBarMenu } from "../constants/appBar";
import { colors } from "../constants/colors";

const Header = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: colors.background }}>
      <Toolbar>
        <Link to={"/"}>
          {/* Full Logo for medium+ screens */}
          <img
            src="/icons/full-logo.png"
            alt="Full Logo"
            style={{ height: 70 }}
            className="full-logo"
          />
          {/* Compact Logo for small screens */}
          <img
            src="/icons/logo.png"
            alt="Compact Logo"
            style={{ height: 50 }}
            className="compact-logo"
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
                borderBottom: `2px solid ${colors.logoRed}`,
                fontWeight: "bold",
              },
            }}
          >
            {tab.label}
          </Button>
        ))}
      </Toolbar>

      <style>
        {`
          .full-logo {
            display: none;
          }
          .compact-logo {
            display: block;
          }
          @media (min-width: 600px) {
            .full-logo {
              display: block;
            }
            .compact-logo {
              display: none;
            }
          }
        `}
      </style>
    </AppBar>
  );
};

export default Header;
