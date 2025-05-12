import { Box } from "@mui/material";
import { colors } from "../constants/colors";
import { ProjectType } from "../constants/interfaces";

const ProjectLabel = ({ type }: { type: ProjectType }) => {
  return (
    <Box
      sx={{
        display: "inline-block",
        bgcolor: colors[type],
        color: "white",
        px: 1.5,
        py: 0.5,
        borderRadius: "12px",
        fontSize: "0.75rem",
        fontWeight: 500,
        mb: 1.5,
      }}
    >
      {type}
    </Box>
  );
};

export default ProjectLabel;
