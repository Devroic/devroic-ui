import { Box } from "@mui/material";
import { colors } from "../constants/colors";
import { ProjectType } from "../constants/interfaces";

const ProjectLabel = ({ type }: { type: ProjectType }) => {
  return (
    <Box
      sx={{
        display: "inline-block",
        alignSelf: "flex-start",
        bgcolor: colors[type],
        color: "white",
        px: 1.25,
        py: 0.4,
        borderRadius: "12px",
        fontSize: "0.7rem",
        fontWeight: 600,
        letterSpacing: 0.3,
        textTransform: "uppercase",
        mb: 1.5,
      }}
    >
      {type}
    </Box>
  );
};

export default ProjectLabel;
