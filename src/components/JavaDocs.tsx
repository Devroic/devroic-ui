import { useState } from "react";
import { Box, CircularProgress } from "@mui/material";

const JavaDocs = ({ path }: { path: string }) => {
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
    </Box>
  );
};

export default JavaDocs;
