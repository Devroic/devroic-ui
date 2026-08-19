import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Project } from "../constants/interfaces";
import ProjectLabel from "./ProjectLabel";

const ProjectCard = ({ project }: { project: Project }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "background.paper",
        color: "white",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardActionArea
        onClick={() => navigate(project.path)}
        sx={{ height: "100%", display: "flex", alignItems: "stretch" }}
      >
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <ProjectLabel type={project.type} />
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
            {project.description}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
            sx={{ color: "primary.main", mt: 2 }}
          >
            <Typography variant="body2" fontWeight={600}>
              Learn More
            </Typography>
            <ArrowForwardIcon fontSize="small" />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
