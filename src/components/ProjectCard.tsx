import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { colors } from "../constants/colors";
import { Project } from "../constants/interfaces";
import ProjectLabel from "./ProjectLabel";

const ProjectCard = ({ project }: { project: Project }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: 350, bgcolor: colors.card, color: "white" }}>
      <CardContent>
        <ProjectLabel type={project.type} />
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="gray">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{ color: colors.lightBlue }}
          onClick={() => {
            navigate(project.path);
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
