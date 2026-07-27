import { useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const JavaDocs = ({ path, backTo }: { path: string; backTo: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box sx={{ position: "fixed", inset: 0, bgcolor: "background.default" }}>
      {!loaded && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress sx={{ color: "primary.main" }} />
        </Box>
      )}
      <iframe
        src={path}
        title="JavaDocs"
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      />
      <Button
        component={Link}
        to={backTo}
        startIcon={<ArrowBackIcon />}
        variant="contained"
        size="small"
        sx={{
          position: "fixed",
          top: 12,
          left: 12,
          bgcolor: "primary.main",
          color: "#000",
          fontWeight: 600,
          textTransform: "none",
          boxShadow: 3,
        }}
      >
        Back to Devroic
      </Button>
    </Box>
  );
};

export default JavaDocs;
